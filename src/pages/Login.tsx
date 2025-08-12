import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Eye, EyeOff, Lock, User as UserIcon } from 'lucide-react';
import { COMPANY_NAME, APP_NAME, ROUTES } from '@/utils/constants';
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [resetOpen, setResetOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [resetId, setResetId] = useState('');

  useEffect(() => {
    document.title = 'Login - INOC Duty Roster';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock auth: store a simple flag and redirect
    localStorage.setItem('auth', 'true');
    navigate(ROUTES.DASHBOARD);
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-sans gradient-background p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm" style={{ borderRadius: '12px' }}>
          <CardContent className="p-8">
            <h1 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#004e9a' }}>Login</h1>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-gray-700 font-medium">Username / Employee ID</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username or employee ID"
                  className="bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-0 focus-visible:border-blue-500"
                  style={{ borderRadius: '8px' }}
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="pr-9 bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-0 focus-visible:border-blue-500"
                    style={{ borderRadius: '8px' }}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="text-right">
                <button
                  type="button"
                  onClick={() => setResetOpen(true)}
                  className="text-sm hover:underline"
                  style={{ color: '#004e9a' }}
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full text-white font-medium py-2.5 transition-colors"
                style={{ 
                  backgroundColor: '#004e9a',
                  borderRadius: '8px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#003a7a'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#004e9a'}
              >
                Login
              </button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Dialog open={resetOpen} onOpenChange={setResetOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Reset Password</DialogTitle>
            <DialogDescription>
              Enter your Employee ID or email. We will send you instructions to reset your password.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <Label htmlFor="resetId">Employee ID / Email</Label>
            <Input id="resetId" value={resetId} onChange={(e) => setResetId(e.target.value)} placeholder="e.g. 123456 or name@ntc.net.np" />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setResetOpen(false)}>Cancel</Button>
            <Button
              onClick={() => {
                setResetOpen(false);
                toast.success('Password reset link sent');
              }}
              className="bg-[hsl(var(--nt-primary))] hover:bg-[hsl(var(--nt-primary-hover))] text-white"
            >
              Send Reset Link
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;
