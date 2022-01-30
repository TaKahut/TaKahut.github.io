import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Là ou l'accessibilité vous porte</h1>
    <p>
      Après le temps fort du Le Grhandiose Takahut Tour 2021 , retrouvez-nous
      sur le groupe (lien ci-dessous) pour organiser entre particuliers des
      échanges, des locations ou du couchsurfing de logements accessibles ♿️
    </p>
    <p>
      <span>https://www.facebook.com/groups/logementdevacancestakahut</span>
    </p>
    <StaticImage
      src="../images/image2.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Ttrouve ton logement de vacances avec TaKahut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <a href="mailto:contact@takahut.com">contact@takahut.com</a>
      <br />
      <a href="https://www.facebook.com/takahut/">Facebook</a>
      <br />
    </p>
  </Layout>
)

export default IndexPage
