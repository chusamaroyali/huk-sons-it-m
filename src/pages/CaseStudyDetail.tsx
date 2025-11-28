import { useParams, Navigate } from 'react-router-dom';
import { CaseStudyTemplate } from '../components/CaseStudyTemplate';
import { CASE_STUDIES } from '../utils/data';

export function CaseStudyDetail() {
  const { slug } = useParams();
  const caseStudy = CASE_STUDIES.find(c => c.slug === slug);

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  return <CaseStudyTemplate caseStudy={caseStudy} />;
}
