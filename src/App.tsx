import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { AccessibilityMenu } from "./components/AccessibilityMenu";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./utils/ThemeContext";

// Lazy load pages
const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const SolutionsPage = lazy(() => import("./pages/SolutionsPage").then(module => ({ default: module.SolutionsPage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then(module => ({ default: module.AboutPage })));
const WhyUsPage = lazy(() => import("./pages/WhyUsPage").then(module => ({ default: module.WhyUsPage })));
const IndustriesPage = lazy(() => import("./pages/IndustriesPage").then(module => ({ default: module.IndustriesPage })));
const LeadershipPage = lazy(() => import("./pages/LeadershipPage").then(module => ({ default: module.LeadershipPage })));
const GetStartedPage = lazy(() => import("./pages/GetStartedPage").then(module => ({ default: module.GetStartedPage })));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage").then(module => ({ default: module.ResourcesPage })));
const BlogsPage = lazy(() => import("./pages/BlogsPage").then(module => ({ default: module.BlogsPage })));
const NewsPage = lazy(() => import("./pages/NewsPage").then(module => ({ default: module.NewsPage })));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage").then(module => ({ default: module.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import("./pages/TermsOfServicePage").then(module => ({ default: module.TermsOfServicePage })));
const SecurityPage = lazy(() => import("./pages/SecurityPage").then(module => ({ default: module.SecurityPage })));
const CloudInfrastructurePage = lazy(() => import("./pages/services/CloudInfrastructurePage").then(module => ({ default: module.CloudInfrastructurePage })));
const AIAutomationPage = lazy(() => import("./pages/services/AIAutomationPage").then(module => ({ default: module.AIAutomationPage })));
const DataInfrastructurePage = lazy(() => import("./pages/services/DataInfrastructurePage").then(module => ({ default: module.DataInfrastructurePage })));
const EmergencyInterventionPage = lazy(() => import("./pages/services/EmergencyInterventionPage").then(module => ({ default: module.EmergencyInterventionPage })));
const DigitalMarketingPage = lazy(() => import("./pages/services/DigitalMarketingPage").then(module => ({ default: module.DigitalMarketingPage })));
const EmergingTechnologiesPage = lazy(() => import("./pages/services/EmergingTechnologiesPage").then(module => ({ default: module.EmergingTechnologiesPage })));
const BusinessProcessServicesPage = lazy(() => import("./pages/services/BusinessProcessServicesPage").then(module => ({ default: module.BusinessProcessServicesPage })));
const GrowthServicesPage = lazy(() => import("./pages/services/GrowthServicesPage").then(module => ({ default: module.GrowthServicesPage })));
const SaasSoftwarePage = lazy(() => import("./pages/industries/SaasSoftwarePage").then(module => ({ default: module.SaasSoftwarePage })));
const FintechBankingPage = lazy(() => import("./pages/industries/FintechBankingPage").then(module => ({ default: module.FintechBankingPage })));
const EcommerceRetailPage = lazy(() => import("./pages/industries/EcommerceRetailPage").then(module => ({ default: module.EcommerceRetailPage })));
const HealthcareLifesciencesPage = lazy(() => import("./pages/industries/HealthcareLifesciencesPage").then(module => ({ default: module.HealthcareLifesciencesPage })));
const AnalyticsAIPage = lazy(() => import("./pages/industries/AnalyticsAIPage").then(module => ({ default: module.AnalyticsAIPage })));
const EdtechPage = lazy(() => import("./pages/industries/EdtechPage").then(module => ({ default: module.EdtechPage })));
const ManufacturingIndustrialPage = lazy(() => import("./pages/industries/ManufacturingIndustrialPage").then(module => ({ default: module.ManufacturingIndustrialPage })));
const TravelHospitalityPage = lazy(() => import("./pages/industries/TravelHospitalityPage").then(module => ({ default: module.TravelHospitalityPage })));
const RealEstatePropTechPage = lazy(() => import("./pages/industries/RealEstatePropTechPage").then(module => ({ default: module.RealEstatePropTechPage })));
const InvestmentAssetManagementPage = lazy(() => import("./pages/industries/InvestmentAssetManagementPage").then(module => ({ default: module.InvestmentAssetManagementPage })));
const InsuranceInsurtechPage = lazy(() => import("./pages/industries/InsuranceInsurtechPage").then(module => ({ default: module.InsuranceInsurtechPage })));
const CybersecurityPage = lazy(() => import("./pages/industries/CybersecurityPage").then(module => ({ default: module.CybersecurityPage })));
const TelecommunicationsPage = lazy(() => import("./pages/industries/TelecommunicationsPage").then(module => ({ default: module.TelecommunicationsPage })));
const EnterpriseSaaSPage = lazy(() => import("./pages/industries/EnterpriseSaaSPage").then(module => ({ default: module.EnterpriseSaaSPage })));
const MediaEntertainmentPage = lazy(() => import("./pages/industries/MediaEntertainmentPage").then(module => ({ default: module.MediaEntertainmentPage })));
const MobileAppDevPage = lazy(() => import("./pages/industries/MobileAppDevPage").then(module => ({ default: module.MobileAppDevPage })));
const GamingEsportsPage = lazy(() => import("./pages/industries/GamingEsportsPage").then(module => ({ default: module.GamingEsportsPage })));
const EnergyUtilitiesPage = lazy(() => import("./pages/industries/EnergyUtilitiesPage").then(module => ({ default: module.EnergyUtilitiesPage })));
const RetailTechnologyPage = lazy(() => import("./pages/industries/RetailTechnologyPage").then(module => ({ default: module.RetailTechnologyPage })));
const WellnessFitnessPage = lazy(() => import("./pages/industries/WellnessFitnessPage").then(module => ({ default: module.WellnessFitnessPage })));
const AutomotiveMobilityPage = lazy(() => import("./pages/industries/AutomotiveMobilityPage").then(module => ({ default: module.AutomotiveMobilityPage })));
const LogisticsSupplyChainPage = lazy(() => import("./pages/industries/LogisticsSupplyChainPage").then(module => ({ default: module.LogisticsSupplyChainPage })));
const ProfessionalServicesPage = lazy(() => import("./pages/industries/ProfessionalServicesPage").then(module => ({ default: module.ProfessionalServicesPage })));
const AgricultureAgTechPage = lazy(() => import("./pages/industries/AgricultureAgTechPage").then(module => ({ default: module.AgricultureAgTechPage })));
const TransportationFreightPage = lazy(() => import("./pages/industries/TransportationFreightPage").then(module => ({ default: module.TransportationFreightPage })));
const ConstructionEngineeringPage = lazy(() => import("./pages/industries/ConstructionEngineeringPage").then(module => ({ default: module.ConstructionEngineeringPage })));
const CreativeDesignPage = lazy(() => import("./pages/industries/CreativeDesignPage").then(module => ({ default: module.CreativeDesignPage })));
const BroadcastingStreamingPage = lazy(() => import("./pages/industries/BroadcastingStreamingPage").then(module => ({ default: module.BroadcastingStreamingPage })));
const LegalTechPage = lazy(() => import("./pages/industries/LegalTechPage").then(module => ({ default: module.LegalTechPage })));
const LuxuryPremiumPage = lazy(() => import("./pages/industries/LuxuryPremiumPage").then(module => ({ default: module.LuxuryPremiumPage })));
const SocialNetworkingPage = lazy(() => import("./pages/industries/SocialNetworkingPage").then(module => ({ default: module.SocialNetworkingPage })));
const DataCentersHostingPage = lazy(() => import("./pages/industries/DataCentersHostingPage").then(module => ({ default: module.DataCentersHostingPage })));
const SLAPage = lazy(() => import("./pages/legal/SLAPage").then(module => ({ default: module.SLAPage })));
const StandardSLAPage = lazy(() => import("./pages/legal/StandardSLAPage").then(module => ({ default: module.StandardSLAPage })));
const EnterpriseSLAPage = lazy(() => import("./pages/legal/EnterpriseSLAPage").then(module => ({ default: module.EnterpriseSLAPage })));
const FAQPage = lazy(() => import("./pages/legal/FAQPage").then(module => ({ default: module.FAQPage })));
const NDAPage = lazy(() => import("./pages/legal/NDAPage").then(module => ({ default: module.NDAPage })));
const SitemapPage = lazy(() => import("./pages/legal/SitemapPage").then(module => ({ default: module.SitemapPage })));
const CertificationsPage = lazy(() => import("./pages/CertificationsPage").then(module => ({ default: module.CertificationsPage })));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage").then(module => ({ default: module.CaseStudiesPage })));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail").then(module => ({ default: module.CaseStudyDetail })));
const CodeOfConductPage = lazy(() => import("./pages/legal/CodeOfConductPage").then(module => ({ default: module.CodeOfConductPage })));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] dark:bg-[#0E1116]">
    <div className="w-12 h-12 border-4 border-[#00D3A9] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0E1116] text-[#0F6B4D] dark:text-[#F8FAFC] transition-colors duration-300">
          <Header />
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                
                {/* Solutions */}
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/services" element={<Navigate to="/solutions" replace />} />
                <Route path="/solutions/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                <Route path="/solutions/ai-automation" element={<AIAutomationPage />} />
                <Route path="/solutions/data-infrastructure" element={<DataInfrastructurePage />} />
                <Route path="/solutions/emergency-intervention" element={<EmergencyInterventionPage />} />
                <Route path="/solutions/digital-marketing" element={<DigitalMarketingPage />} />
                <Route path="/solutions/emerging-technologies" element={<EmergingTechnologiesPage />} />
                <Route path="/solutions/business-process" element={<BusinessProcessServicesPage />} />
                <Route path="/solutions/growth" element={<GrowthServicesPage />} />

                {/* Company */}
                <Route path="/about" element={<AboutPage />} />
                <Route path="/why-us" element={<WhyUsPage />} />
                <Route path="/leadership" element={<LeadershipPage />} />
                <Route path="/certifications" element={<CertificationsPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />

                {/* Contact / Get Started */}
                <Route path="/contact-us" element={<GetStartedPage />} />
                <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
                <Route path="/get-started" element={<Navigate to="/contact-us" replace />} />

                {/* Resources */}
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/resources/blogs" element={<BlogsPage />} />
                <Route path="/resources/news" element={<NewsPage />} />

                {/* Industries */}
                <Route path="/industries" element={<IndustriesPage />} />
                <Route path="/industries/saas-software" element={<SaasSoftwarePage />} />
                <Route path="/industries/fintech-banking" element={<FintechBankingPage />} />
                <Route path="/industries/ecommerce-retail" element={<EcommerceRetailPage />} />
                <Route path="/industries/healthcare-lifesciences" element={<HealthcareLifesciencesPage />} />
                <Route path="/industries/analytics-ai" element={<AnalyticsAIPage />} />
                <Route path="/industries/edtech" element={<EdtechPage />} />
                <Route path="/industries/manufacturing-industrial" element={<ManufacturingIndustrialPage />} />
                <Route path="/industries/travel-hospitality" element={<TravelHospitalityPage />} />
                <Route path="/industries/real-estate-proptech" element={<RealEstatePropTechPage />} />
                <Route path="/industries/investment-asset-management" element={<InvestmentAssetManagementPage />} />
                <Route path="/industries/insurance-insurtech" element={<InsuranceInsurtechPage />} />
                <Route path="/industries/cybersecurity" element={<CybersecurityPage />} />
                <Route path="/industries/telecommunications" element={<TelecommunicationsPage />} />
                <Route path="/industries/enterprise-saas" element={<EnterpriseSaaSPage />} />
                <Route path="/industries/media-entertainment" element={<MediaEntertainmentPage />} />
                <Route path="/industries/mobile-app-dev" element={<MobileAppDevPage />} />
                <Route path="/industries/gaming-esports" element={<GamingEsportsPage />} />
                <Route path="/industries/energy-utilities" element={<EnergyUtilitiesPage />} />
                <Route path="/industries/retail-technology" element={<RetailTechnologyPage />} />
                <Route path="/industries/wellness-fitness" element={<WellnessFitnessPage />} />
                <Route path="/industries/automotive-mobility" element={<AutomotiveMobilityPage />} />
                <Route path="/industries/logistics-supply-chain" element={<LogisticsSupplyChainPage />} />
                <Route path="/industries/professional-services" element={<ProfessionalServicesPage />} />
                <Route path="/industries/agriculture-agtech" element={<AgricultureAgTechPage />} />
                <Route path="/industries/transportation-freight" element={<TransportationFreightPage />} />
                <Route path="/industries/construction-engineering" element={<ConstructionEngineeringPage />} />
                <Route path="/industries/creative-design" element={<CreativeDesignPage />} />
                <Route path="/industries/broadcasting-streaming" element={<BroadcastingStreamingPage />} />
                <Route path="/industries/legal-tech" element={<LegalTechPage />} />
                <Route path="/industries/luxury-premium" element={<LuxuryPremiumPage />} />
                <Route path="/industries/social-networking" element={<SocialNetworkingPage />} />
                <Route path="/industries/data-centers-hosting" element={<DataCentersHostingPage />} />

                {/* Legal */}
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                <Route path="/security" element={<SecurityPage />} />
                <Route path="/sla" element={<SLAPage />} />
                <Route path="/sla/standard" element={<StandardSLAPage />} />
                <Route path="/sla/enterprise" element={<EnterpriseSLAPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/nda" element={<NDAPage />} />
                <Route path="/sitemap" element={<SitemapPage />} />
                <Route path="/code-of-conduct" element={<CodeOfConductPage />} />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <BackToTop />
          <AccessibilityMenu />
          <Toaster position="top-right" />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}