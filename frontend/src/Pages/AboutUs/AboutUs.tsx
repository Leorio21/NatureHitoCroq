import React from "react";
import styled from "styled-components";
import Title from "../../Components/Title/Title";
import hito from "../../assets/hito.jpg";
import { devices } from "../../Styles/devices";

const AboutUs = (): React.ReactElement => {
  return (
    <Container>
      <Title level="h2" padding={10} title="Qui sommes-nous ?" />
      <Img src={hito} alt={"photo d'hito"} />
      <Paragraph>
        Dans notre <strong>animalerie</strong> nous privilégions le{" "}
        <strong>service</strong> et les <strong>conseils</strong> .
      </Paragraph>
      <Paragraph>
        Étant aussi comme vous détenteurs d&apos;animaux nous recherchons donc
        des <strong>tarifs attractifs</strong> pour vous que ce soit dans
        l&apos;alimentation les jouets ou les accessoires. Nous connaissons très
        bien le budget pour un animal que ce soit chien ou chat ou autre. La
        majorité de nos produits proposés sont testés soit par nous soit par des
        personnes proches de notre entourage.
      </Paragraph>
      <Paragraph>
        Certes nous sommes une petite animalerie mais nous ne désirons pas être
        comme les grosses animaleries et désolé du terme : devenir des vendeurs
        à l&apos;état pur. (vendre pour vendre , ce qui n&apos;est pas notre
        cas). Nous effectuons des combats journaliers pour éviter les
        augmentations que nous pouvons voir actuellement , pour rester dans de{" "}
        <strong>très bons rapport qualité prix</strong>. C&apos;est grâce à{" "}
        <strong>HITO</strong> qu&apos;aujourd&apos;hui que vous pouvez avoir une
        animalerie qui vous conseillera au mieux et vous pouvez aussi le
        remercier car de nouveaux produits sont testés par lui.
      </Paragraph>
      <Paragraph>
        Nous désirons aussi nous excuser, car étant un petit magasin nous ne
        pouvons pas tout avoir en stock, mais nous pouvons avoir sur commande en
        fonction des disponibilités.
      </Paragraph>
      <Paragraph>
        N&apos;hésitez pas à nous faire connaître nous resterons de taille
        humaine et resterons toujours dans notre optique : le{" "}
        <strong>bien-être</strong> en priorité pour nos <strong>animaux</strong>
        .
      </Paragraph>
      <Paragraph>
        Je vous remercie d&apos;avoir pris le temps d&apos;avoir lu cette
        description, et n&apos;hésitez pas si vous désirez que nous effectuons
        des stands dans votre club canin ou pendant un concours cela sera avec
        plaisir de pouvoir vous rencontrer.
      </Paragraph>
      <WordContainer>
        <WordDefinition>
          <Title
            level="h3"
            size={20}
            title="NATURE"
            color="var(--light-color)"
          />
          <Paragraph>
            Effectivement nous recherchons le plus sain possible pour nos
            animaux. Que ce soit pour l&apos;alimentation ou les{" "}
            <strong>friandises naturelles</strong>
          </Paragraph>
        </WordDefinition>
        <WordDefinition>
          <Title level="h3" size={20} title="HITO" color="var(--light-color)" />
          <Paragraph>
            C&apos;est le prénom de mon chien et c&apos;est un clin d&apos;œil
            pour lui car c&apos;est mon premier chien et avec lui nous avons
            vécu de grands moments et il m&apos;a développé des passions que je
            ne connaissais pas.
          </Paragraph>
        </WordDefinition>
        <WordDefinition>
          <Title level="h3" size={20} title="CROQ" color="var(--light-color)" />
          <Paragraph>
            Ce mot a plusieurs significations croque comme l&apos;alimentation
            mais aussi croque pour croque la vie a pleine dent donc profitez de
            chaque moment.
          </Paragraph>
        </WordDefinition>
      </WordContainer>
      <Img src={hito} alt={"photo d'hito"} />
    </Container>
  );
};

export default AboutUs;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;
  max-width: 1440px;
  height: 100%;
`;

const Paragraph = styled.p`
  padding: 10px 0px;
`;

const Img = styled.img`
  width: 100%;
  max-width: 800px;
  margin: 0px auto;
  object-fit: cover;
`;

const WordDefinition = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  color: var(--light-color);
  text-align: justify;
  background-color: var(--primary-text-color);
  border-radius: 10px;
  font-family: "Times New Roman", Times, serif;
`;

const WordContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${devices.desktop} {
    flex-direction: row;
  }
`;
