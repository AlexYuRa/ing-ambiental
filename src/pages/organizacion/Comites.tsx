import React from 'react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import EnConstruccion from '../../components/layout/EnConstruccion';
import ComiteRoster from '../../components/personas/ComiteRoster';
import { comiteCalidad, comiteCurriculo } from '@profile/content/comites';

/**
 * Página agrupada "Comités". El navbar muestra los comités por separado; todos
 * llevan aquí, a su ancla correspondiente. Las denominaciones son las oficiales;
 * pueden variar por facultad, se priorizan las principales.
 *
 * "Calidad" y "Currículo" (COTECCU) ya tienen miembros confirmados en
 * docs/ y usan <ComiteRoster/>. Los demás siguen en construcción: el
 * documento fuente no lista sus integrantes todavía.
 */
export default function Comites() {
  return (
    <>
      <AnchoredSection id="calidad">
        <ComiteRoster
          titulo="Comité de **Calidad**"
          descripcion="Autoevaluación y acreditación de la calidad del programa."
          resolucion={comiteCalidad.resolucion}
          miembros={comiteCalidad.miembros}
          bg="bg-white"
        />
      </AnchoredSection>
      <AnchoredSection id="curriculo">
        <ComiteRoster
          titulo="Comité Técnico de **Currículo**"
          resolucion={comiteCurriculo.resolucion}
          miembros={comiteCurriculo.miembros}
          bg="bg-gray-50"
        />
      </AnchoredSection>
      <AnchoredSection id="tutoria">
        <EnConstruccion titulo="Comité de **Tutoría y Consejería**" bg="bg-white" />
      </AnchoredSection>
      <AnchoredSection id="egresado">
        <EnConstruccion titulo="Comité de **Seguimiento al Egresado**" bg="bg-gray-50" />
      </AnchoredSection>
      <AnchoredSection id="investigacion">
        <EnConstruccion titulo="Comité de **Investigación**" bg="bg-white" />
      </AnchoredSection>
      <AnchoredSection id="responsabilidad">
        <EnConstruccion titulo="Comité de **Responsabilidad Social**" bg="bg-gray-50" />
      </AnchoredSection>
    </>
  );
}
