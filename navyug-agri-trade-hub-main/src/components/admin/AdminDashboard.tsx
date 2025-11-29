
import React, { useState, useEffect } from 'react';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import AdminHeader from './AdminHeader';
import AdminNavigation from './AdminNavigation';
import AdminOverview from './AdminOverview';
import AdminInquiries from './AdminInquiries';
import AdminProducts from './AdminProducts';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  product_interest?: string;
  message: string;
  status: 'pending' | 'in_progress' | 'resolved';
  created_at: string;
}

interface Product {
  id: number;
  title: string;
  category?: string;
  prise?: string;
}

const AdminDashboard = () => {
  const { admin, logout } = useAdminAuth();
  const { toast } = useToast();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'inquiries' | 'products'>('overview');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch inquiries
      const { data: inquiriesData, error: inquiriesError } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (inquiriesError) throw inquiriesError;

      // Fetch products
      const { data: productsData, error: productsError } = await supabase
        .from('Products')
        .select('*')
        .order('id', { ascending: false });

      if (productsError) throw productsError;

      // Type the inquiries data properly
      const typedInquiries: Inquiry[] = (inquiriesData || []).map(inquiry => ({
        ...inquiry,
        status: inquiry.status as 'pending' | 'in_progress' | 'resolved'
      }));

      setInquiries(typedInquiries);
      setProducts(productsData || []);
    } catch (error) {
      toast({
        title: "Error fetching data",
        description: "Failed to load dashboard data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateInquiryStatus = async (id: string, status: 'pending' | 'in_progress' | 'resolved') => {
    try {
      const { error } = await supabase
        .from('inquiries')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;

      setInquiries(prev => 
        prev.map(inquiry => 
          inquiry.id === id ? { ...inquiry, status } : inquiry
        )
      );

      toast({
        title: "Status updated",
        description: "Inquiry status has been updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error updating status",
        description: "Failed to update inquiry status",
        variant: "destructive",
      });
    }
  };

  const stats = {
    totalInquiries: inquiries.length,
    pendingInquiries: inquiries.filter(i => i.status === 'pending').length,
    totalProducts: products.length,
    resolvedInquiries: inquiries.filter(i => i.status === 'resolved').length,
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader adminName={admin?.name} onLogout={logout} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdminNavigation 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
          pendingInquiries={stats.pendingInquiries} 
        />

        {activeTab === 'overview' && <AdminOverview stats={stats} />}
        {activeTab === 'inquiries' && (
          <AdminInquiries inquiries={inquiries} onUpdateStatus={updateInquiryStatus} />
        )}
        {activeTab === 'products' && <AdminProducts products={products} />}
      </div>
    </div>
  );
};

export default AdminDashboard;
