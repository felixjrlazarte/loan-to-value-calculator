import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

const CalculatorForm = ({
  onSubmit
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.depositValue}>
        <FormLabel htmlFor='depositValue'>Deposit value</FormLabel>
        <Input
          id='depositValue'
          placeholder='Deposit value'
          {...register('depositValue', {
            required: 'This is required',
          })}
        />
        <FormErrorMessage fontSize="12px">
          {errors.depositValue && errors.depositValue.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.purchasePrice} mt="20px">
        <FormLabel htmlFor='purchasePrice'>Purchase price</FormLabel>
        <Input
          id='purchasePrice'
          placeholder='Purchase price'
          {...register('purchasePrice', {
            required: 'This is required',
          })}
        />
        <FormErrorMessage fontSize="12px">
          {errors.purchasePrice && errors.purchasePrice.message}
        </FormErrorMessage>
      </FormControl>

      <Button w="full" mt={4} bg="#4829AA" color="white" isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
  )
}

export default CalculatorForm;