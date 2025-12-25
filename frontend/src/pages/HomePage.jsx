import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScatterPlotSVG, RegressionLineSVG, DistributionCurveSVG, NetworkGraphSVG } from "@/components/StatisticalGraphic";

const HomePage = () => {
  const capabilities = [
    {
      title: "Statistical Modeling",
      description: "Rigorous statistical frameworks for inference and prediction.",
      graphic: <RegressionLineSVG className="w-24 h-20" />
    },
    {
      title: "Dimensionality Reduction",
      description: "PCA, t-SNE, and manifold learning for complex data structures.",
      graphic: <ScatterPlotSVG className="w-24 h-20" />
    },
    {
      title: "Uncertainty Quantification",
      description: "Bayesian methods and confidence intervals for robust conclusions.",
      graphic: <DistributionCurveSVG className="w-24 h-20" />
    },
    {
      title: "Network Analysis",
      description: "Graph theory and relational data analysis for interconnected systems.",
      graphic: <NetworkGraphSVG className="w-24 h-20" />
    }
  ];

  const proofPoints = [
    "Peer-reviewed methodologies",
    "Reproducible analysis pipelines",
    "Version-controlled code repositories",
    "Transparent documentation"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-balance mb-6">
            Data analysis built for research, not hype.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            We apply rigorous statistical methods to solve complex problems. No buzzwords, no black boxes—just transparent, reproducible research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
              <Link to="/contact">Work with us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-medium border-border hover:bg-muted">
              <Link to="/research">Read our research</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Core Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expertise rooted in statistical theory and computational methods.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, idx) => (
              <Card key={idx} className="border-border shadow-card hover:shadow-lg transition-shadow bg-card">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 mt-1">
                      {capability.graphic}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-3">{capability.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-center">Why Research-First Matters</h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              In a field crowded with tools and frameworks, we believe the fundamentals matter more than ever. Statistical rigor, proper experimental design, and transparent methodology aren't optional—they're the foundation of trustworthy analysis.
            </p>
            <p className="text-lg leading-relaxed">
              We don't chase trends or promise silver bullets. Instead, we apply proven statistical methods, document our assumptions, and deliver results you can validate and reproduce.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
              <div>
                <h3 className="text-lg text-foreground mb-2">Methodology > Tools</h3>
                <p className="text-sm text-muted-foreground">The right method matters more than the latest framework.</p>
              </div>
              <div>
                <h3 className="text-lg text-foreground mb-2">Transparency > Speed</h3>
                <p className="text-sm text-muted-foreground">We prioritize understanding over quick fixes.</p>
              </div>
              <div>
                <h3 className="text-lg text-foreground mb-2">Reproducibility > Convenience</h3>
                <p className="text-sm text-muted-foreground">Results should be verifiable, not just impressive.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof of Seriousness */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-center">Our Standards</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {proofPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              All our work follows open science principles. We publish our methods, share our code, and welcome scrutiny.
            </p>
            <Button asChild variant="outline" className="border-border hover:bg-muted font-medium">
              <Link to="/about">
                Learn more about our approach
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">Ready to start a project?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We work with research teams, startups, and organizations that value rigorous analysis.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
            <Link to="/contact">Get in touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
