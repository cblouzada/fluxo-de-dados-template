import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = () => {

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro