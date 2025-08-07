import { COMPANY_NAME } from '@/utils/constants';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50 py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">{COMPANY_NAME}</h3>
            <p className="text-sm text-muted-foreground">
              Leading telecommunications provider in Nepal, serving millions of customers nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li><a href="/dashboard" className="hover:text-primary transition-colors">Dashboard</a></li>
              <li><a href="/duty-chart" className="hover:text-primary transition-colors">Duty Chart</a></li>
              <li><a href="/employees" className="hover:text-primary transition-colors">Employees</a></li>
              <li><a href="/reports" className="hover:text-primary transition-colors">Reports</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-2">Contact</h4>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Bhadrakali Plaza, Kathmandu</p>
              <p>Phone: +977-1-4200001</p>
              <p>Email: info@ntc.net.np</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};