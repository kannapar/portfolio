"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export default function Home() {
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
  const { ref: etfRef, inView: etfInView } = useInView({ threshold: 0.5 });
  const { ref: gldRef, inView: gldInView } = useInView({ threshold: 0.5 });
  const { ref: ugldRef, inView: ugldInView } = useInView({ threshold: 0.5 });
  const { ref: weeklyregRef, inView: weeklyregInView } = useInView({
    threshold: 0.5,
  });
  const { ref: fraudetctRef, inView: fraudetctInView } = useInView({
    threshold: 0.5,
  });

  return (
    <div className="flex flex-col w-full">
      {/* ABOUT ME SECTION */}
      <section
        id="aboutme"
        ref={aboutRef}
        className={clsx(
          "relative h-screen w-full flex flex-col transition-all duration-700",
          aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        {/* Top half with background image */}
        <div
          className="flex-1/4 bg-cover bg-top rounded-t-2xl"
          style={{
            backgroundImage: "url('/portfolio/images/REX03490.JPG')",
          }}
        >
          {/* Optional overlay to darken the top image if needed */}
          <div className="w-full h-full bg-gradient-to-b from-black/40 to-transparent rounded-t-2xl" />
        </div>

        {/* Bottom half white with text */}
        <div className="flex-1/12 bg-white dark:bg-[#0F172A] rounded-b-2xl p-8 md:p-16 overflow-auto flex-col">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-6xl mx-auto prose prose-lg prose-neutral dark:prose-invert"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">About Me</h2>
            <p>
              Hi, I’m Kavya Annapareddy – a data enthusiast with a passion for
              turning complex data into clear insights. With experience in
              Python, SQL, and business-focused analytics, I love building
              projects that help people make smarter decisions. Outside of data,
              I enjoy hiking weekends with my husband, cooking with whole
              grains, and getting lost in a good book. Figuring things out and
              learning new skills bring me joy, whether it’s solving a tricky
              data problem or trying a new recipe.
            </p>
            <h3 className="text-2xl font-bold text-primary mt-5">
              Writing & Insights
            </h3>
            <p>
              I enjoy sharing ideas and experiences related to data science,
              finance, and life on my Medium blog. Explore my stories here:{" "}
              <Link
                href="https://medium.com/@kavya8a"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600 hover:text-blue-700 transition"
              >
                https://medium.com/@kavya8a
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ETF FORGE SECTION */}
      <section
        id="etfforge"
        ref={etfRef}
        className={clsx(
          "h-screen px-6 md:px-12 flex items-center justify-center transition-all duration-700",
          etfInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto prose prose-lg prose-neutral dark:prose-invert"
        >
          <div className="relative z-10 max-w-4xl w-full">
            <h2 className="text-4xl font-bold mb-6 text-primary">
              ETF Forge{" "}
              <Link
                href="https://github.com/kannapar/ETF-Forge"
                target="_blank"
              >
                <Button variant="outline" className="justify-center">
                  <GitHubLogoIcon className="h-8 w-8" />
                </Button>
              </Link>
            </h2>
            <p className="text-lg leading-relaxed">
              <strong>Overview</strong>: ETF Forge is a Python-based analytical
              tool designed to identify uncorrelated Exchange-Traded Funds
              (ETFs) to enhance portfolio diversification. It leverages
              correlation filtering and hierarchical clustering to select ETF
              combinations that reduce overlap and improve risk-adjusted
              returns.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              <strong>Key Features:</strong>
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-lg">
              <li>
                <strong>Correlation Heatmaps & Clustering:</strong> Uses
                dendrogram-based hierarchical clustering to visualize
                relationships between ETFs.
              </li>
              <li>
                <strong>Risk-Return Analysis:</strong> Calculates Sharpe ratio,
                max drawdown, and volatility for informed decision-making.
              </li>
              <li>
                <strong>Portfolio Insights: </strong> Supports integration into
                personal finance dashboards for dynamic ETF screening and
                tracking.
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* gldcswpy SECTION */}
      <section
        id="gldcswpy"
        ref={gldRef}
        className={clsx(
          "h-screen px-6 md:px-12 flex items-center justify-center transition-all duration-700",
          gldInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative z-10 max-w-4xl w-full">
            <h2 className="text-4xl font-bold mb-6 text-primary">
              gldcswpy{" "}
              <Link href="https://github.com/kannapar/gldcswpy" target="_blank">
                <Button variant="outline" className="justify-center">
                  <GitHubLogoIcon className="h-8 w-8" />
                </Button>
              </Link>
            </h2>

            <p className="text-lg leading-relaxed">
              gldcswpy is a Python library that implements the
              <strong> Generalized Lambda Distribution (GLD)</strong> using the
              <strong> CSW</strong> parametrization, with a strong emphasis on
              accessibility, education, and reproducibility. The GLD is an
              exceptionally versatile distribution for modeling real-world data,
              but it is often underutilized due to limited free resources and
              confusing parametrization schemes. This library is based on the
              openly available paper by <strong> Yohan Chalabi et al. </strong>
              <Link
                href={
                  "https://mpra.ub.uni-muenchen.de/37814/1/MPRA_paper_37814.pdf"
                }
                target="_blank"
                className="hover:underline hover:text-blue-500"
              >
                (MPRA, 2012)
              </Link>
              📎, which clearly explains the CSW parameterization. In contrast,
              the more commonly cited GLD reference -
              <strong> Karian & Dudewicz (2000)</strong>, which uses the
              <strong> FKML </strong>
              parameterization is not freely available. Also, the R package that
              once implemented CSW is now unmaintained. While libraries such as
              gldpy exist for FKML, there was no equivalent for CSW in Python —
              until now.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              <strong>Key Features:</strong>
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-lg">
              <li>
                <strong>CSW Parametrization: </strong> mplements the CSW form of
                GLD, providing a powerful alternative to the more common FKML
                variant.The CSW parametrization has a unique advantage: its
                shape parameters have finite domains, allowing the entire
                distribution family to be visualized and explored in a single 2D
                plot. This makes it far more intuitive and an ideal entry point
                for those learning about GLD distributions, especially in
                applied contexts like finance, education, or simulations.
              </li>
              <li>
                <strong>Pedagogical Utility:</strong> Offers clear parameter
                boundaries, making it easier to teach and interpret distribution
                shapes and behaviors.
              </li>
              <li>
                <strong>Flexible Distribution Modeling: </strong> Models a wide
                range of data using a unified mathematical form — including
                skewed, peaked, or fat-tailed distributions.
              </li>
              <li>
                <strong>Accessible & Reproducible: </strong> Built entirely from
                open-access research, ensuring transparency and longevity.
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed">
              <strong>Technologies Used:</strong> Python, NumPy, SciPy,
              Matplotlib
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              <strong>Use Case:</strong> Ideal for data scientists, educators,
              and financial engineers interested in custom distribution fitting,
              risk modeling, or simulation — particularly when standard
              distributions fall short.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Using gldcswpy SECTION */}
      <section
        id="ugldcswpy"
        ref={ugldRef}
        className={clsx(
          "h-screen px-6 md:px-12 flex items-center justify-center transition-all duration-700",
          ugldInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative z-10 max-w-4xl w-full">
            <h2 className="text-4xl font-bold mb-6 text-primary">
              using_gldcswpy{" "}
              <Link
                href="https://github.com/kannapar/using_gldcswpy"
                target="_blank"
              >
                <Button variant="outline" className="justify-center">
                  <GitHubLogoIcon className="h-8 w-8" />
                </Button>
              </Link>
            </h2>

            <p className="text-lg leading-relaxed">
              <code>using_gldcswpy</code> is a Jupyter Notebook that
              demonstrates practical applications of the
              <code> gldcswpy</code> library. It provides step-by-step examples
              for generating data, fitting GLD models with the CSW
              parametrization, and calculating risk metrics — helping users
              understand and apply this versatile distribution in real-world
              scenarios.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              <strong>Key Features:</strong>
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-lg">
              <li>
                <strong>Data Generation & Fitting: </strong> mplements the CSW
                form of GLD, providing a powerful alternative to the more common
                FKML variant.The CSW parametrization has a unique advantage: its
                shape parameters have finite domains, allowing the entire
                distribution family to be visualized and explored in a single 2D
                plot. This makes it far more intuitive and an ideal entry point
                for those learning about GLD distributions, especially in
                applied contexts like finance, education, or simulations.
              </li>
              <li>
                <strong>Risk Analysis:</strong> Calculate quantile-based risk
                measures (e.g., Value at Risk) for a popular stock using the GLD
                framework.
              </li>
              <li>
                <strong>Sampling: </strong> Generate both 1D and 2D synthetic
                samples based on fitted GLD parameters to explore distributional
                characteristics.
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed">
              <strong>Technologies Used:</strong> Python, Jupyter Notebook,
              Matplotlib,{" "}
              <Link className="text-green-500" href={"#gldcswpy"}>
                {" "}
                gldcswpy
              </Link>
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              <strong>Use Case:</strong> An interactive guide for statisticians,
              financial analysts, and data enthusiasts to explore the CSW
              parametrization’s capabilities for data modeling, risk assessment,
              and simulation.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Using Weeklyreg SECTION */}
      <section
        id="weeklyreg"
        ref={weeklyregRef}
        className={clsx(
          "h-screen px-6 md:px-12 flex items-center justify-center transition-all duration-700",
          weeklyregInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative z-10 max-w-4xl w-full">
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Weekly Regime{" "}
              <Link
                href="https://github.com/kannapar/weekly_regime"
                target="_blank"
              >
                <Button variant="outline" className="justify-center">
                  <GitHubLogoIcon className="h-8 w-8" />
                </Button>
              </Link>
            </h2>

            <p className="text-lg leading-relaxed">
              The <strong>Weekly Regime </strong>project leverages
              <strong> L1 trend filtering </strong>to identify and classify
              economic regimes from market data, capturing shifts in market
              conditions that impact portfolio risk. Inspired by the paper{" "}
              <i>
                "Identifying Economic Regimes: Reducing Downside Risks for
                University Endowments and Foundations,"
              </i>{" "}
              this tool segments financial time series into distinct regimes,
              helping investors and portfolio managers adapt to changing market
              environments. This project also includes an automated workflow
              that generates weekly regime signals and distributes them via
              email, ensuring stakeholders receive timely insights without
              manual intervention.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              <strong>Key Features:</strong>
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-lg">
              <li>
                Applies <strong>L1 trend filtering </strong>for structural break
                detection and smoothing in weekly financial return series.
              </li>
              <li>
                Classifies regimes into distinct states (e.g., expansion,
                contraction) based on trend signals and regime thresholds.
              </li>
              <li>
                Automates <strong>weekly regime email reports </strong>to
                deliver actionable insights directly to users.
              </li>{" "}
              <li>
                Includes visualization tools for regime plots and trend signals
                to aid interpretation.
              </li>{" "}
              <li>
                Supports flexible configuration of parameters, including trend
                filtering lambda and regime classification thresholds.
              </li>{" "}
              <li>
                Built using Python with libraries such as NumPy, Pandas, CVXPY
                (for convex optimization), Matplotlib, and SMTP for email
                automation.
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed">
              <strong>Technologies Used:</strong> Python, CVXPY, Pandas,
              Matplotlib, SMTP/email libraries
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              <strong>Use Case:</strong> This project is tailored for portfolio
              managers, risk analysts, and financial researchers seeking to
              integrate regime-based analysis into risk management frameworks
              and decision-making processes. The automated email delivery
              ensures consistent communication of market conditions, enabling
              more proactive portfolio adjustments.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Using Fraud Detection SECTION */}
      <section
        id="fraudetct"
        ref={fraudetctRef}
        className={clsx(
          "h-screen px-6 md:px-12 flex items-center justify-center transition-all duration-700",
          fraudetctInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative z-10 max-w-4xl w-full">
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Fraud Detection{" "}
              <Link
                href="https://github.com/kannapar/Fraud_Detetction"
                target="_blank"
              >
                <Button variant="outline" className="justify-center">
                  <GitHubLogoIcon className="h-8 w-8" />
                </Button>
              </Link>
            </h2>

            <p className="text-lg leading-relaxed">
              Fraud detection is often perceived as a black-box machine learning
              challenge, but{" "}
              <strong>
                data exploration using SQL and structured queries{" "}
              </strong>
              can uncover valuable insights before building any models. This
              project simulates how a financial analyst might investigate fraud
              in transaction data through detailed exploratory analysis using
              SQL queries and Python notebooks. Utilizes PaySim dataset on
              Kaggle is a mobile money simulator based on real transaction
              patterns, featuring over 6 million entries.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              <strong>Key Features:</strong>
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-lg">
              <li>
                Conducts exploratory data analysis (EDA) using SQL queries to
                extract meaningful fraud insights before modeling.
              </li>
              <li>
                Analyzes transaction types and volume to identify fraud
                concentration areas.
              </li>
              <li>
                Evaluates the effectiveness of existing fraud flags in the
                dataset.
              </li>{" "}
              <li>
                Examines temporal trends to detect hours or steps with elevated
                fraudulent behavior.
              </li>{" "}
              <li>
                Investigates account-level transaction patterns for suspicious
                spikes.
              </li>{" "}
              <li>
                Identifies outliers indicative of potentially high-stakes fraud
                events.
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed">
              <strong>Technologies Used:</strong> SQL, Kaggle PaySim Dataset
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              <strong>Use Case:</strong> Designed as an analyst’s exploratory
              toolkit, this project demonstrates how structured queries can
              uncover fraud signals in financial transactions, forming a strong
              foundation for subsequent machine learning or rule-based fraud
              detection systems.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
