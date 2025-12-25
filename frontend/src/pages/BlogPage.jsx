import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const BlogPage = () => {
  const posts = [
    {
      slug: "bias-variance-tradeoff",
      title: "The Bias-Variance Tradeoff in Practice",
      date: "2024-01-15",
      tags: ["Statistical Learning", "Model Selection"],
      excerpt: "An empirical examination of model complexity and generalization error using simulation studies.",
      readTime: "12 min read"
    },
    {
      slug: "reproducible-research",
      title: "Building Reproducible Research Workflows",
      date: "2024-01-08",
      tags: ["Methods", "Open Science"],
      excerpt: "A practical guide to version control, environment management, and documentation for data science projects.",
      readTime: "10 min read"
    },
    {
      slug: "statistical-power",
      title: "Understanding Statistical Power and Sample Size",
      date: "2023-12-20",
      tags: ["Experimental Design", "Inference"],
      excerpt: "Why power analysis matters and how to calculate appropriate sample sizes for common study designs.",
      readTime: "15 min read"
    },
    {
      slug: "dimensionality-reduction",
      title: "Beyond PCA: Modern Dimensionality Reduction Techniques",
      date: "2023-12-10",
      tags: ["Unsupervised Learning", "Visualization"],
      excerpt: "Comparing PCA, t-SNE, UMAP, and autoencoders for high-dimensional data exploration.",
      readTime: "18 min read"
    },
    {
      slug: "bayesian-inference",
      title: "Bayesian Inference for Uncertain Measurements",
      date: "2023-11-28",
      tags: ["Bayesian Methods", "Uncertainty"],
      excerpt: "Using MCMC to quantify measurement uncertainty and propagate error through complex models.",
      readTime: "20 min read"
    },
    {
      slug: "causal-inference",
      title: "Causal Inference Without Randomization",
      date: "2023-11-15",
      tags: ["Causal Methods", "Observational Studies"],
      excerpt: "Propensity score matching, instrumental variables, and other approaches for causal questions in observational data.",
      readTime: "16 min read"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="mb-4">Research Notes</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In-depth explorations of statistical methods, experimental design, and data analysis techniques. Each post follows a structured format: problem statement, data assumptions, methodology, results, and limitations.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} to={`/research/${post.slug}`} className="block group">
              <Card className="border-border shadow-card hover:shadow-lg transition-all hover:border-primary/30">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground font-normal text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Archive Notice */}
        <div className="mt-16 p-6 bg-muted/30 rounded-lg border border-border text-center">
          <p className="text-sm text-muted-foreground">
            Looking for older posts? Our complete archive is available on request. Contact us for access to our full research library.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
