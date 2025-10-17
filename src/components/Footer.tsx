const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">AirCover</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Anti-discrimination</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Disability support</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cancellation options</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Hosting</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Airbnb your home</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Hosting resources</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Community forum</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Hosting responsibly</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Airbnb</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Newsroom</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">New features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Investors</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Gift cards</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sitemap</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-border">
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4 md:mb-0">
            <span>© 2024 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <span>·</span>
            <a href="#" className="hover:text-foreground transition-colors">Sitemap</a>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">English (US)</a>
            <span>·</span>
            <a href="#" className="hover:text-foreground transition-colors">$ USD</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;