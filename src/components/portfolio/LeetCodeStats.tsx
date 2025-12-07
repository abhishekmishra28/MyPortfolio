"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface HeatmapValue {
  date: string;
  count: number;
}

interface LeetCodeData {
  easy: number;
  medium: number;
  hard: number;
  total: number;
  heatmap: HeatmapValue[];
}

const USERNAME = "abhishekmishra2002";

const LeetCodeStats = () => {
  const [stats, setStats] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://leetcode-api-faisalshohag.vercel.app/${USERNAME}`
        );

        const data = await res.json();

        if (!data || data.message === "Not found") {
          throw new Error("Invalid username or API error");
        }

        const heatmap: HeatmapValue[] = Object.entries(
          data.submissionCalendar || {}
        ).map(([timestamp, count]) => ({
          date: new Date(parseInt(timestamp) * 1000)
            .toISOString()
            .split("T")[0],
          count: count as number
        }));

        setStats({
          easy: data.easySolved,
          medium: data.mediumSolved,
          hard: data.hardSolved,
          total: data.totalSolved,
          heatmap
        });
      } catch (err) {
        console.error(err);
        setError("Unable to load LeetCode stats right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const getBarChartData = () => ({
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        label: "Problems Solved",
        data: stats ? [stats.easy, stats.medium, stats.hard] : [],
        backgroundColor: ["#22c55e", "#eab308", "#ef4444"],
        borderRadius: 6
      }
    ]
  });

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#a1a1aa" }
      },
      y: {
        grid: { color: "rgba(148,163,184,0.2)" },
        ticks: { color: "#a1a1aa" }
      }
    }
  };

  const getHeatmapClass = (value: HeatmapValue | null) => {
    if (!value || value.count === 0) return "color-empty";
    if (value.count < 2) return "color-scale-1";
    if (value.count < 4) return "color-scale-2";
    if (value.count < 6) return "color-scale-3";
    return "color-scale-4";
  };

  const today = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  return (
    <section className="py-20 relative" id="leetcode">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-syntax-keyword">const</span>{" "}
            <span className="text-syntax-function">leetcode</span>{" "}
            <span className="text-foreground">= {'{'}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Data structures, algorithms & problem-solving progress
          </p>
        </motion.div>

        {loading && (
          <p className="text-center text-muted-foreground">
            Fetching live LeetCode stats...
          </p>
        )}

        {error && !loading && (
          <p className="text-center text-red-400 text-sm mb-6">{error}</p>
        )}

        {stats && (
          <div className="space-y-10">
            {/* JSON + Bar Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* JSON Card */}
              <motion.div
                className="terminal-window bg-card/60 border border-terminal-border rounded-2xl p-6 shadow-xl"
                whileHover={{ rotateX: 4, rotateY: -4, translateY: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <div className="terminal-header mb-4">
                  <div className="terminal-dot red" />
                  <div className="terminal-dot yellow" />
                  <div className="terminal-dot green" />
                  <span className="text-muted-foreground font-mono text-xs ml-4">
                    leetcode.ts
                  </span>
                </div>

                <pre className="font-mono text-sm leading-6">
{`const profile = {
  username: "${USERNAME}",
  totalSolved: ${stats.total},
  easy: ${stats.easy},
  medium: ${stats.medium},
  hard: ${stats.hard}
}`}
                </pre>

                <p className="mt-4 text-xs text-muted-foreground font-mono">
                  // Improving one problem at a time
                </p>
              </motion.div>

              {/* Bar Chart */}
              <motion.div
                className="terminal-window bg-card/60 border border-terminal-border rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="terminal-header mb-4">
                  <div className="terminal-dot red" />
                  <div className="terminal-dot yellow" />
                  <div className="terminal-dot green" />
                  <span className="text-muted-foreground font-mono text-xs ml-4">
                    difficulty-chart.ts
                  </span>
                </div>

                <div className="h-64">
                  <Bar data={getBarChartData()} options={barOptions} />
                </div>
              </motion.div>
            </div>

            {/* Heatmap */}
            <motion.div
              className="terminal-window bg-card/60 border border-terminal-border rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="terminal-header mb-4">
                <div className="terminal-dot red" />
                <div className="terminal-dot yellow" />
                <div className="terminal-dot green" />
                <span className="text-muted-foreground font-mono text-xs ml-4">
                  heatmap.ts
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-4 font-mono">
                // Streak heatmap (last 12 months)
              </p>

              <CalendarHeatmap
                startDate={oneYearAgo}
                endDate={today}
                values={stats.heatmap}
                classForValue={getHeatmapClass}
                showWeekdayLabels={true}
              />

              <div className="flex gap-2 items-center mt-4 text-xs text-muted-foreground">
                <span>Less</span>
                <span className="w-4 h-4 bg-zinc-900 border rounded-sm" />
                <span className="w-4 h-4 bg-emerald-900 rounded-sm" />
                <span className="w-4 h-4 bg-emerald-700 rounded-sm" />
                <span className="w-4 h-4 bg-emerald-500 rounded-sm" />
                <span className="w-4 h-4 bg-emerald-300 rounded-sm" />
                <span>More</span>
              </div>
            </motion.div>

            {/* Footer */}
            <div className="text-center mt-6">
              <a
                href={`https://leetcode.com/u/${USERNAME}/`}
                target="_blank"
                className="text-matrix-green underline text-sm"
              >
                View full profile →
              </a>
            </div>

            <motion.div
              className="text-center mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <span className="text-4xl text-foreground font-mono">{"}"}</span>
            </motion.div>
          </div>
        )}
      </div>

      {/* Heatmap Colors */}
      <style>{`
        .react-calendar-heatmap .color-empty { fill: #020617; }
        .react-calendar-heatmap .color-scale-1 { fill: #14532d; }
        .react-calendar-heatmap .color-scale-2 { fill: #16a34a; }
        .react-calendar-heatmap .color-scale-3 { fill: #22c55e; }
        .react-calendar-heatmap .color-scale-4 { fill: #bbf7d0; }
      `}</style>
    </section>
  );
};

export default LeetCodeStats;
