import { useQuery } from '@tanstack/react-query';
import { sanityQuery } from '@/lib/sanity';

const queries = {
  siteSettings: '*[_type == "siteSettings"][0]',
  pricingPlans: '*[_type == "pricingPlan"] | order(price asc)',
  portfolioItems: '*[_type == "portfolioItem"] | order(_createdAt desc)',
  testimonials: '*[_type == "testimonial"] | order(_createdAt desc)',
  services: '*[_type == "service"] | order(_createdAt desc)',
  promotions: '*[_type == "promotion"][active == true] | order(_createdAt desc)',
  contactInfo: '*[_type == "siteSettings"][0].contactInfo',
};

export function useSanity(queryType: keyof typeof queries) {
  return useQuery({
    queryKey: ['sanity', queryType],
    queryFn: () => sanityQuery(queries[queryType]),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: false,
  });
}
