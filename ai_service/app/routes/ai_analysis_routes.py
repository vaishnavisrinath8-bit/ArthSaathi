from fastapi import APIRouter

from app.schemas.ai_analysis_schema import FinancialAnalysisRequest
from app.schemas.loan_analysis_schema import LoanAnalysisRequest
from app.services.ai_analysis_service import (
    analyze_financial_signup,
    analyze_loan_eligibility,
)
from app.utils.response_builder import success_response

router = APIRouter(prefix="/ai-analysis", tags=["AI Analysis"])


@router.get("/health")
def health_check():
    return {"status": "ok", "module": "ai_analysis"}


@router.post("/financial-analysis")
def financial_analysis(request: FinancialAnalysisRequest):
    analysis = analyze_financial_signup(request.model_dump())
    return success_response(analysis, "Financial analysis completed")


@router.post("/loan-analysis")
def loan_analysis(request: LoanAnalysisRequest):
    analysis = analyze_loan_eligibility(request.model_dump())
    return success_response(analysis, "Loan analysis completed")