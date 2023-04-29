import { gql } from "@apollo/client";

export const LOAN_TO_VALUE_CALC_QUERY = ({ depositValue, purchasePrice }) => gql`
  {
    loanToValueCalc (depositValue: ${depositValue}, purchasePrice: ${purchasePrice}) {
      result
    }
  }
`;