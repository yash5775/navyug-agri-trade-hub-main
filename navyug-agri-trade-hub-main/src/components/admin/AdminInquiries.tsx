
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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

interface AdminInquiriesProps {
  inquiries: Inquiry[];
  onUpdateStatus: (id: string, status: 'pending' | 'in_progress' | 'resolved') => void;
}

const AdminInquiries = ({ inquiries, onUpdateStatus }: AdminInquiriesProps) => {
  const getStatusBadge = (status: string) => {
    const variants: Record<string, 'default' | 'secondary' | 'destructive'> = {
      pending: 'destructive',
      in_progress: 'secondary',
      resolved: 'default'
    };
    return <Badge variant={variants[status] || 'default'}>{status.replace('_', ' ')}</Badge>;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Inquiries</CardTitle>
        <CardDescription>Manage customer inquiries and contact requests</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Product Interest</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inquiries.map((inquiry) => (
              <TableRow key={inquiry.id}>
                <TableCell className="font-medium">{inquiry.name}</TableCell>
                <TableCell>{inquiry.email}</TableCell>
                <TableCell>{inquiry.product_interest || 'General'}</TableCell>
                <TableCell>{getStatusBadge(inquiry.status)}</TableCell>
                <TableCell>{new Date(inquiry.created_at).toLocaleDateString()}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    {inquiry.status === 'pending' && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => onUpdateStatus(inquiry.id, 'in_progress')}
                      >
                        Start
                      </Button>
                    )}
                    {inquiry.status === 'in_progress' && (
                      <Button 
                        size="sm" 
                        onClick={() => onUpdateStatus(inquiry.id, 'resolved')}
                      >
                        Resolve
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {inquiries.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No inquiries found
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AdminInquiries;
