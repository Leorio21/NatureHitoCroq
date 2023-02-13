import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "../../Components/Card/Card";
import Figure from "../../Components/Figure/Figure";
import Product from "../../Components/Product/Product";
import Title from "../../Components/Title/Title";
import { useModal } from "../../Hooks/Modal/useModal";
import { useFetch } from "../../Hooks/Fetch/useFetch";
import { FoodInterface } from "../../Interfaces/Interfaces";

const Food = (): React.ReactElement => {
  const { response, error, isLoading } =
    useFetch<FoodInterface[]>("../Food.json");
  const { setModal, ModalContainer } = useModal();

  useEffect(() => {
    if (error !== "") {
      setModal(`Une erreur est survenue : ${error}`);
    }
  }, [response]);
  return (
    <>
      <Container>
        {isLoading && "Chargement"}
        {response?.length === 0 ? (
          <Title level="h2" title="Aucun produits disponibles" />
        ) : (
          response?.map((food, index) => {
            return (
              <Card key={index} showOnClickElement={<Product product={food} />}>
                <Figure
                  illustration={food.image}
                  title={`${food.name}\n${food.weigth}`}
                />
              </Card>
            );
          })
        )}
      </Container>
      <ModalContainer />
    </>
  );
};

export default Food;

const Container = styled.section`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  row-gap: 20px;
  flex-flow: row wrap;
`;
