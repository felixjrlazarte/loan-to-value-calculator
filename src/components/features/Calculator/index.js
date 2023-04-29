import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { Flex, Center, Text } from "@chakra-ui/react";

import { LOAN_TO_VALUE_CALC_QUERY } from "../../../schema/queries";
import CalculatorForm from "./form";
import Loader from "../../common/Loader";

const Calculator = () => {
  const [formValues, setFormValues] = useState({});

  const [
    getResult,
    { data, loading }
  ] = useLazyQuery(LOAN_TO_VALUE_CALC_QUERY(formValues));

  const onSubmit = async (values) => {
    await setFormValues(values);
    getResult();
  }

  return (
    <>
      <Loader isLoading={loading ? true : false} />
      <Flex
        w="460px"
        bg="#F5F5F5"
        p="20px"
        borderRadius="5px"
        flexDirection="column"
        boxShadow="0px -2px 8px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(115, 117, 118, 0.2)"
      >
        <Text fontSize="25px" fontWeight={500} mb="20px">
          Loan To Value Calculator
        </Text>

        <Flex
          w="270px"
          h="270px"
          my="40px"
          p="30px"
          alignSelf="center"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          border="10px solid #4829AA"
          borderRadius="50%"
        >
          <Text fontSize="25px" fontWeight={500} mb="20px">
            Result
          </Text>

          <Text fontSize="60px">
            {data ? data.loanToValueCalc.result : "0%"}
          </Text>
        </Flex>

        <CalculatorForm onSubmit={onSubmit} />
      </Flex>
    </>
  );
}

export default Calculator;