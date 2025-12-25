import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-6">About Axion Research</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We're a small, independent research consultancy focused on rigorous statistical analysis and transparent methodology.
          </p>
        </div>

        {/* Why We Exist */}
        <section className="mb-16">
          <h2 className="text-3xl mb-6">Why We Exist</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The data science field has become crowded with tools, frameworks, and promises of instant insights. Somewhere along the way, fundamental statistical principles got buried under layers of automation and marketing hype.
            </p>
            <p>
              We founded Axion Research because we believe rigorous analysis shouldn't be rare or remarkable—it should be standard. Every analysis should be reproducible. Every model should come with documented assumptions. Every conclusion should acknowledge its limitations.
            </p>
            <p>
              We work with researchers, organizations, and teams who share this belief and want analysis they can trust, validate, and build upon.
            </p>
          </div>
        </section>

        {/* Background */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Research Background</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border shadow-card">
              <CardContent className="pt-6">
                <GraduationCap className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Academic Foundation</h3>
                <p className="text-sm text-muted-foreground">
                  Ph.D. training in statistics and computational methods from research-intensive institutions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border shadow-card">
              <CardContent className="pt-6">
                <Award className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Peer-Reviewed Work</h3>
                <p className="text-sm text-muted-foreground">
                  Published research in statistical methodology, machine learning, and computational biology.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border shadow-card">
              <CardContent className="pt-6">
                <BookOpen className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Open Science</h3>
                <p className="text-sm text-muted-foreground">
                  Active contributors to open-source statistical software and reproducible research tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-3xl mb-6">Long-Term Mission</h2>
          <div className="bg-muted/30 rounded-lg p-8 border border-border">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our goal is simple: make rigorous statistical analysis more accessible without compromising on quality or transparency.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe the best way to achieve this is through clear documentation, open methods, and honest communication about what our analyses can and cannot tell us. We're building a practice that prioritizes long-term trust over short-term convenience.
            </p>
          </div>
        </section>

        {/* Ethical Stance */}
        <section className="mb-16">
          <h2 className="text-3xl mb-6">Ethical Stance</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">What We Won't Do</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Manipulate data or analyses to produce desired results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Hide negative findings or inconvenient limitations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Promise guaranteed outcomes or specific p-values</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Accept projects where transparency would be restricted</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">What We Will Do</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Document all assumptions and methodological choices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Report findings honestly, regardless of implications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Provide reproducible code and clear documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Recommend alternative approaches when appropriate</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-muted/30 rounded-lg p-8 border border-border">
            <h2 className="text-2xl mb-4">Want to work together?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're selective about projects because we want to do excellent work, not just more work. If you value rigor and transparency, we'd love to hear from you.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
