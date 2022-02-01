import React from "react";
import Head from "next/head";
import Header from "../comps/Header";

const legal = () => {
  return (
    <>
    <Head>
        <title>Vijona | Legal Notice</title>
        <meta name="description" content="Vijona Africa is a non-profit organization whose non-profit status is recognized by the California tax office, USA. Its current exemption certificate can be viewed here (in English)." />
        <meta httpEquiv='content-language' content='en' />
        <meta name="robots" content="noindex nofollow" />
        <meta charset="UTF-8"></meta>
        <meta httpEquiv='content-language' content='en' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Header mainText="Legal Notice(Imprint)" />
      <section className="w-10/12 lg:w-8/12 mx-auto my-28">
        <div className="my-10">
          <h2 className=" text-3xl lg:text-4xl my-5 text-v-green">Address</h2>
          <p className="my-10">
            <p className="my-2 ">Vijona Africa</p>
            <p className="my-2">5403 Twin Lakes Dr</p>
            <p className="my-2"> Cypress, CA 90630 </p>
            <p className="my-2">USA</p>
          </p>
          <p className="my-10">
            <p className="my-2">Correspondence address:</p>
            <p className="my-2">5403 Twin Lakes Dr</p>
            <p className="my-2">  Cypress, CA 90630 </p>
            <p className="my-2">USA</p>
          </p>
          <p>Tel. +1 909-248-8735</p>
        </div>
        <p className="my-5">
          Entered in the commercial register of CA District Court (EIN
          82-4813043)
        </p>
        <p className="my-5 lg:w-10/12">
          Vijona Africa is a non-profit organization whose non-profit status is
          recognized by the California tax office, USA. Its current exemption
          certificate can be viewed here (in English).
        </p>

        <div className="my-5">
          <h3 className="text-2xl font-semibold my-3">Executive Board</h3>
          <p>Relindis Mbu, Olga Menang, Lucia Asiedu</p>
        </div>


        <div className="my-10">
          <h3 className="text-3xl lg:text-4xl my-5 text-v-green">Limitation of liability</h3>
          <p className="my-3">
            We make every effort to ensure that the information presented on our
            website is always correct and up to date. We thus reserve the right
            to change, supplement or delete content at any time and without
            prior notification, or to discontinue its publication for a period
            of time or entirely. Nonetheless, we are unable to give any
            guarantee that the information provided is correct, up to date or
            complete, nor can we guarantee its quality. Vijona Africa accepts no
            liability whatsoever for damage of a material or non-material nature
            that arises as the direct or indirect result of using this website,
            to the extent that such damage is not due to willful intent or gross
            negligence on the part of Vijona Africa. Vijona Africa does not
            claim any responsibility for the contents, correctness, and
            functionality of third-party internet pages to which reference is
            made via link. The content of linked websites is the exclusive
            responsibility of their operators.
          </p>
        </div>

        <div className="my-10">
          <h3 className="text-3xl lg:text-4xl my-5 text-v-green">CopyRight</h3>
          <p className="my-3">
            Our intention is to showcase our projects in the best possible way,
            so our sponsors will see progress on our website on a regular basis.
            Our works are explicitly indicated by the abbreviation CC BY-NC-ND
            of License EIN 82-4813043. Essentially, the license means that the
            work or content can be copied, shared, and made publicly accessible
            by users so long as they (1) name the author/copyright owner in the
            manner the latter specifies, (2) do not use the work or content for
            commercial purposes and (3) do not edit, transform, or modify in any
            other way the work or content. Any of these conditions can be
            cancelled if the express consent of the rights owner is obtained. To
            the extent that the work, the content, or any part of it belongs to
            the public domain under the respective legal regulations, this
            status shall not be affected in any way by the license. The license
            has no influence on the following rights:
          </p>

          <ul className="list-disc">
            <li className="my-2">
              the rights granted to anyone due to the constraints of copyright
              law or as a result of legal permissions;
            </li>
            <li className="my-2">the moral rights of the rights owner;</li>
            <li className="my-2">
              the rights of other persons, either to the subject of the license
              or with respect to its use, for example for advertising or the
              protection of privacy.
            </li>
          </ul>
          <p className="my-2">
            If the work is shared, the licensing conditions that apply to this
            work must be disclosed.
          </p>
          <p className="my-3">
            Furthermore, all rights are reserved. The texts, images, graphics,
            videos, files etc. used on this website are subject to copyright and
            other laws designed to protect intellectual property. Any use beyond
            the limits provided by copyright law without explicit permission is
            prohibited.
          </p>
        </div>
      </section>
    </>
  );
};

export default legal;
