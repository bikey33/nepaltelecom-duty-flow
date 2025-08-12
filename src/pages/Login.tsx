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
    <div className="min-h-screen flex items-center justify-center font-sans bg-[hsl(var(--nt-bg))] text-[hsl(var(--nt-text))] p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--nt-primary))] text-white font-bold text-lg shadow-sm">NT</div>
          <h1 className="text-2xl font-semibold">{COMPANY_NAME}</h1>
          <p className="text-sm text-muted-foreground">{APP_NAME}</p>
        </div>

        <Card className="shadow-md rounded-lg border border-[hsl(var(--border))] bg-white">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-1 text-[hsl(var(--nt-text))]">Welcome back</h2>
            <p className="text-sm text-muted-foreground mb-6">Sign in to continue</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-[hsl(var(--nt-text))]">Username / Employee ID</Label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="e.g. 123456 / jdoe"
                    className="pl-9 bg-white border border-[hsl(var(--input))] focus-visible:ring-[hsl(var(--nt-primary))] focus-visible:ring-offset-0 focus-visible:border-[hsl(var(--nt-primary))]"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-[hsl(var(--nt-text))]">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="pl-9 pr-9 bg-white border border-[hsl(var(--input))] focus-visible:ring-[hsl(var(--nt-primary))] focus-visible:ring-offset-0 focus-visible:border-[hsl(var(--nt-primary))]"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2.5 text-[hsl(var(--muted-foreground))] hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => setResetOpen(true)}
                    className="text-sm text-[hsl(var(--nt-primary))] hover:underline"
                  >
                    Forget Password?
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full bg-[hsl(var(--nt-primary))] text-white hover:bg-[hsl(var(--nt-primary-hover))]">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center text-xs text-muted-foreground mt-6">
          © 2025 {COMPANY_NAME}. All rights reserved.
        </div>
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
