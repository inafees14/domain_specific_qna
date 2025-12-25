export const ScatterPlotSVG = ({ className = "" }) => (
  <svg viewBox="0 0 200 150" className={className} fill="none">
    {/* Axes */}
    <line x1="20" y1="130" x2="180" y2="130" stroke="hsl(var(--border))" strokeWidth="1.5" />
    <line x1="20" y1="20" x2="20" y2="130" stroke="hsl(var(--border))" strokeWidth="1.5" />
    
    {/* Data points - PCA scatter */}
    <circle cx="45" cy="90" r="3" fill="hsl(var(--chart-1))" opacity="0.7" />
    <circle cx="55" cy="85" r="3" fill="hsl(var(--chart-1))" opacity="0.7" />
    <circle cx="50" cy="95" r="3" fill="hsl(var(--chart-1))" opacity="0.7" />
    <circle cx="60" cy="80" r="3" fill="hsl(var(--chart-1))" opacity="0.7" />
    
    <circle cx="120" cy="50" r="3" fill="hsl(var(--chart-2))" opacity="0.7" />
    <circle cx="130" cy="55" r="3" fill="hsl(var(--chart-2))" opacity="0.7" />
    <circle cx="125" cy="45" r="3" fill="hsl(var(--chart-2))" opacity="0.7" />
    <circle cx="135" cy="60" r="3" fill="hsl(var(--chart-2))" opacity="0.7" />
    
    <circle cx="80" cy="110" r="3" fill="hsl(var(--chart-3))" opacity="0.7" />
    <circle cx="90" cy="105" r="3" fill="hsl(var(--chart-3))" opacity="0.7" />
    <circle cx="85" cy="115" r="3" fill="hsl(var(--chart-3))" opacity="0.7" />
    <circle cx="95" cy="100" r="3" fill="hsl(var(--chart-3))" opacity="0.7" />
  </svg>
);

export const RegressionLineSVG = ({ className = "" }) => (
  <svg viewBox="0 0 200 150" className={className} fill="none">
    {/* Axes */}
    <line x1="20" y1="130" x2="180" y2="130" stroke="hsl(var(--border))" strokeWidth="1.5" />
    <line x1="20" y1="20" x2="20" y2="130" stroke="hsl(var(--border))" strokeWidth="1.5" />
    
    {/* Regression line */}
    <line x1="30" y1="120" x2="170" y2="30" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.8" />
    
    {/* Data points */}
    <circle cx="40" cy="115" r="2.5" fill="hsl(var(--chart-1))" opacity="0.6" />
    <circle cx="60" cy="100" r="2.5" fill="hsl(var(--chart-1))" opacity="0.6" />
    <circle cx="80" cy="80" r="2.5" fill="hsl(var(--chart-1))" opacity="0.6" />
    <circle cx="100" cy="65" r="2.5" fill="hsl(var(--chart-1))" opacity="0.6" />
    <circle cx="120" cy="55" r="2.5" fill="hsl(var(--chart-1))" opacity="0.6" />
    <circle cx="140" cy="45" r="2.5" fill="hsl(var(--chart-1))" opacity="0.6" />
    <circle cx="160" cy="35" r="2.5" fill="hsl(var(--chart-1))" opacity="0.6" />
  </svg>
);

export const DistributionCurveSVG = ({ className = "" }) => (
  <svg viewBox="0 0 200 150" className={className} fill="none">
    {/* Axes */}
    <line x1="20" y1="130" x2="180" y2="130" stroke="hsl(var(--border))" strokeWidth="1.5" />
    <line x1="20" y1="20" x2="20" y2="130" stroke="hsl(var(--border))" strokeWidth="1.5" />
    
    {/* Bell curve */}
    <path
      d="M 30 130 Q 50 120, 70 80 T 100 30 T 130 80 T 170 130"
      stroke="hsl(var(--primary))"
      strokeWidth="2"
      fill="hsl(var(--primary))"
      fillOpacity="0.1"
    />
  </svg>
);

export const HeatmapSVG = ({ className = "" }) => (
  <svg viewBox="0 0 200 150" className={className} fill="none">
    <rect x="20" y="20" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.3" rx="2" />
    <rect x="55" y="20" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.5" rx="2" />
    <rect x="90" y="20" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.7" rx="2" />
    <rect x="125" y="20" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.9" rx="2" />
    
    <rect x="20" y="55" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.5" rx="2" />
    <rect x="55" y="55" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.8" rx="2" />
    <rect x="90" y="55" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.6" rx="2" />
    <rect x="125" y="55" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.4" rx="2" />
    
    <rect x="20" y="90" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.7" rx="2" />
    <rect x="55" y="90" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.4" rx="2" />
    <rect x="90" y="90" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.9" rx="2" />
    <rect x="125" y="90" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.5" rx="2" />
  </svg>
);

export const NetworkGraphSVG = ({ className = "" }) => (
  <svg viewBox="0 0 200 150" className={className} fill="none">
    {/* Connections */}
    <line x1="100" y1="40" x2="50" y2="80" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.5" />
    <line x1="100" y1="40" x2="150" y2="80" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.5" />
    <line x1="100" y1="40" x2="100" y2="100" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.5" />
    <line x1="50" y1="80" x2="100" y2="100" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.5" />
    <line x1="150" y1="80" x2="100" y2="100" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.5" />
    
    {/* Nodes */}
    <circle cx="100" cy="40" r="8" fill="hsl(var(--primary))" />
    <circle cx="50" cy="80" r="6" fill="hsl(var(--chart-2))" />
    <circle cx="150" cy="80" r="6" fill="hsl(var(--chart-2))" />
    <circle cx="100" cy="100" r="6" fill="hsl(var(--chart-3))" />
  </svg>
);

export const FeatureImportanceSVG = ({ className = "" }) => (
  <svg viewBox="0 0 200 150" className={className} fill="none">
    {/* Bars */}
    <rect x="20" y="30" width="140" height="14" fill="hsl(var(--chart-1))" opacity="0.8" rx="2" />
    <rect x="20" y="54" width="110" height="14" fill="hsl(var(--chart-2))" opacity="0.7" rx="2" />
    <rect x="20" y="78" width="85" height="14" fill="hsl(var(--chart-3))" opacity="0.7" rx="2" />
    <rect x="20" y="102" width="60" height="14" fill="hsl(var(--chart-4))" opacity="0.6" rx="2" />
  </svg>
);
