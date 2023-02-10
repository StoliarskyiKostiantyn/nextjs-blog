import Head from "next/head";
import { useState } from "react";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { ModalWindow } from "../components/Modal";

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_PATH}socials`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { socials: data },
  };
};

export default function About({ socials }) {
  const [modalShow, setModalShow] = useState(false);
  function closeModal() {
    setModalShow(false);
  }
  return (
    <Layout about>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi Im trying no make a Modal</p>
        <button
          onClick={() => {
            setModalShow(true);
          }}
        >
          Open modal
        </button>
      </section>
      {modalShow ? (
        <ModalWindow open={modalShow} onClose={closeModal} socials={socials} />
      ) : null}
    </Layout>
  );
}
