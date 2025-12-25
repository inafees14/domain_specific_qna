import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar } from "lucide-react";
import { RegressionLineSVG } from "@/components/StatisticalGraphic";

const BlogPostPage = () => {
  const { slug } = useParams();

  // Mock post data - in real app, fetch based on slug
  const post = {
    title: "The Bias-Variance Tradeoff in Practice",
    date: "2024-01-15",
    tags: ["Statistical Learning", "Model Selection"],
    readTime: "12 min read",
    content: {
      problem: "Understanding how model complexity affects generalization performance is fundamental to statistical learning. While the bias-variance tradeoff is well-known theoretically, its practical implications are often misunderstood.",
      assumptions: [
        "Data are independent and identically distributed (i.i.d.)",
        "True underlying relationship is continuous and smooth",
        "Measurement error follows a normal distribution with constant variance",
        "Sample size is sufficient for asymptotic approximations"
      ],
      methodology: "We generated synthetic datasets with known ground truth functions (linear, polynomial, and sinusoidal). For each dataset, we fit models of increasing complexity (polynomial degrees 1-10) and evaluated their performance using 10-fold cross-validation. Training error, validation error, and test error were recorded for each model complexity level.",
      results: "As expected, training error decreased monotonically with model complexity. However, validation error exhibited a U-shaped curve, initially decreasing as bias reduced, then increasing as variance dominated. The optimal model complexity (degree 3 polynomial) balanced these competing factors. Test set performance closely matched validation results, confirming our cross-validation strategy.",
      limitations: [
        "Synthetic data may not capture real-world complexity",
        "Results are specific to polynomial basis functions",
        "Sample size (n=500) may not generalize to small-sample scenarios",
        "Normal error assumption may not hold for all applications"
      ]
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8 -ml-4 hover:bg-muted">
          <Link to="/research">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Research
          </Link>
        </Button>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground font-normal text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-slate max-w-none">
          {/* Problem Statement */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Problem Statement</h2>
            <p className="text-muted-foreground leading-relaxed">
              {post.content.problem}
            </p>
          </section>

          {/* Data Assumptions */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Assumptions</h2>
            <ul className="space-y-2">
              {post.content.assumptions.map((assumption, idx) => (
                <li key={idx} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>{assumption}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Methodology */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Methodology</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {post.content.methodology}
            </p>
            <div className="bg-muted/30 rounded-lg p-6 border border-border">
              <div className="flex items-center justify-center">
                <RegressionLineSVG className="w-64 h-48" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Figure 1: Example regression fit showing relationship between model complexity and fit quality.
              </p>
            </div>
          </section>

          {/* Results */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Results</h2>
            <p className="text-muted-foreground leading-relaxed">
              {post.content.results}
            </p>
          </section>

          {/* Limitations */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitations</h2>
            <ul className="space-y-2">
              {post.content.limitations.map((limitation, idx) => (
                <li key={idx} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>{limitation}</span>
                </li>
              ))}
            </ul>
          </section>
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="bg-muted/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">Questions or feedback?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We welcome discussion and critique of our methods. If you spot an issue or have suggestions for improvement, please reach out.
            </p>
            <Button asChild variant="outline" size="sm" className="border-border hover:bg-muted">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BlogPostPage;
