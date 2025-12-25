import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, XCircle } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      title: "Research Data Analysis",
      problem: "Academic and industry researchers need rigorous statistical analysis that meets publication standards.",
      methods: [
        "Hypothesis testing and experimental design",
        "Linear and non-linear modeling",
        "Multi-level and hierarchical models",
        "Time series and longitudinal analysis"
      ],
      deliverables: [
        "Statistical analysis reports",
        "Reproducible R/Python code",
        "Publication-ready figures",
        "Methodology documentation"
      ],
      notIncluded: [
        "Data collection or survey design (consultation only)",
        "Dashboard development for business intelligence",
        "Production ML system deployment"
      ]
    },
    {
      title: "Statistical Modeling",
      problem: "Organizations need predictive models grounded in statistical theory, not just high accuracy scores.",
      methods: [
        "Generalized linear models (GLM)",
        "Survival analysis and Cox regression",
        "Bayesian inference and MCMC",
        "Regularization (Ridge, Lasso, Elastic Net)"
      ],
      deliverables: [
        "Model selection justification",
        "Diagnostic plots and validation",
        "Uncertainty quantification",
        "Interpretable parameter estimates"
      ],
      notIncluded: [
        "Real-time prediction APIs",
        "AutoML or black-box solutions",
        "Model monitoring infrastructure"
      ]
    },
    {
      title: "Machine Learning Evaluation",
      problem: "Companies have ML models but need independent assessment of their validity and limitations.",
      methods: [
        "Cross-validation strategies",
        "Bias-variance analysis",
        "Feature importance and SHAP values",
        "Fairness and robustness testing"
      ],
      deliverables: [
        "Comprehensive evaluation report",
        "Recommended improvements",
        "Comparison with baseline methods",
        "Limitations and assumptions documentation"
      ],
      notIncluded: [
        "Model retraining or hyperparameter tuning",
        "Production deployment or MLOps",
        "Ongoing model maintenance"
      ]
    },
    {
      title: "Academic & Applied Consulting",
      problem: "Research teams need expert guidance on statistical methods, study design, and reproducibility.",
      methods: [
        "Statistical consultation and review",
        "Power analysis and sample size calculation",
        "Reproducible workflow design",
        "Open science best practices"
      ],
      deliverables: [
        "Written consultation reports",
        "Code review and recommendations",
        "Training materials and documentation",
        "Collaborative analysis support"
      ],
      notIncluded: [
        "Ghost authorship or honorary authorship",
        "Guaranteed p-values or results",
        "Data manipulation to fit hypotheses"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-6">Services</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer specialized data science consulting grounded in statistical theory and research methodology. No generic solutions—each engagement is tailored to your specific problem.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-12">
          {services.map((service, idx) => (
            <Card key={idx} className="border-border shadow-card">
              <CardHeader className="border-b border-border pb-6">
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  <span className="font-medium text-foreground">Problem: </span>
                  {service.problem}
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-3">Methods Used</h3>
                    <ul className="space-y-2">
                      {service.methods.map((method, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-3">Deliverables</h3>
                    <ul className="space-y-2">
                      {service.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="text-base font-semibold text-foreground mb-3">What We Don't Do</h3>
                  <ul className="space-y-2">
                    {service.notIncluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <XCircle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-muted/30 rounded-lg p-8 border border-border">
            <h2 className="text-2xl mb-4">Not sure which service fits?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every project is different. Reach out to discuss your specific needs and we'll recommend the right approach.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
              <Link to="/contact">Start a conversation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
