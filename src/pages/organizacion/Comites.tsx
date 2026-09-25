import React from 'react';
import { ShieldCheck, BookOpen, HeartHandshake, FlaskConical, GraduationCap, HandHeart, type LucideIcon } from 'lucide-react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import ComiteRoster from '../../components/personas/ComiteRoster';
import {
  type Comite,
  comiteCalidad,
  comiteCurriculo,
  comiteTutoria,
  comiteInvestigacion,
  comiteSeguimientoEgresado,
  comiteResponsabilidadSocial,
} from '@profile/content/comites';

/**
 * Página agrupada "Comités". El navbar muestra los comités por separado; todos
 * llevan aquí, a su ancla correspondiente. Las denominaciones son las oficiales;
 * pueden variar por facultad, se priorizan las principales.
 *
 * Todos los comités tienen miembros y resolución confirmados en docs/ y usan
 * <ComiteRoster/> (presentación a la izquierda, integrantes a la derecha).
 */
const COMITES: { id: string; titulo: string; icon: LucideIcon; comite: Comite }[] = [
  { id: 'calidad', titulo: 'Comité de **Calidad**', icon: ShieldCheck, comite: comiteCalidad },
  { id: 'curriculo', titulo: 'Comité Técnico de **Currículo**', icon: BookOpen, comite: comiteCurriculo },
  { id: 'tutoria', titulo: 'Comité de **Tutoría y Consejería**', icon: HeartHandshake, comite: comiteTutoria },
  { id: 'investigacion', titulo: 'Comité de **Investigación**', icon: FlaskConical, comite: comiteInvestigacion },
  { id: 'egresado', titulo: 'Comité de **Seguimiento al Egresado**', icon: GraduationCap, comite: comiteSeguimientoEgresado },
  { id: 'responsabilidad', titulo: 'Comité de **Responsabilidad Social**', icon: HandHeart, comite: comiteResponsabilidadSocial },
];

export default function Comites() {
  return (
    <>
      {COMITES.map(({ id, titulo, icon, comite }, idx) => (
        <AnchoredSection key={id} id={id}>
          <ComiteRoster
            titulo={titulo}
            descripcion={comite.descripcion}
            resolucion={comite.resolucion}
            fecha={comite.fecha}
            miembros={comite.miembros}
            icon={icon}
            bg={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
          />
        </AnchoredSection>
      ))}
    </>
  );
}
