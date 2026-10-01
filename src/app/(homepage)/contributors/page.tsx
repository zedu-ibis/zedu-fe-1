import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { siteUrl } from "~/lib/env-urls";
import { contributorTeams } from "../_lib/contributors";

export const metadata: Metadata = {
  title: "Contributors",
  description:
    "Meet the teams building Zedu. Select a team to see its contributors.",
  alternates: {
    canonical: siteUrl("/contributors"),
  },
};

const ContributorsPage = () => {
  return (
    <div className="space-y-12 pb-20">
      <section className="relative isolate flex w-full flex-col items-center gap-4 overflow-hidden px-4 py-10 text-center sm:gap-6 sm:px-8 sm:py-16 lg:px-12 mt-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[30%] bg-gradient-to-t from-blue-50/30 to-white"
        />
        <h1 className="text-2xl font-semibold leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
          Our <span className="text-primary-500">Contributors</span>
        </h1>
        <p className="max-w-[95%] text-xs text-neutral-600 sm:max-w-[90%] sm:text-base md:max-w-[65%] lg:max-w-[45%] lg:text-lg">
          Zedu is built by teams of contributors. Select a team to see the
          people behind it.
        </p>
      </section>

      <section className="w-full px-4 sm:px-8 lg:px-12">
        <ul className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contributorTeams.map((team) => (
            <li key={team.slug}>
              <Link
                href={`/contributors/${team.slug}`}
                className="group flex h-full flex-col justify-between gap-5 rounded-xl bg-neutral-100 p-6 transition-colors hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-primary-500">
                    <Users size={20} />
                  </span>
                  <h2 className="text-xl font-bold text-neutral-900">
                    {team.name}
                  </h2>
                </div>

                {team.description && (
                  <p className="text-neutral-600">{team.description}</p>
                )}

                <span className="flex items-center gap-2 text-sm font-medium text-primary-500">
                  View contributors
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ContributorsPage;
