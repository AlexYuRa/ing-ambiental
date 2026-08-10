import React from 'react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import PerfilIngresante from '../academico/PerfilIngresante';
import PerfilEgresado from '../academico/PerfilEgresado';

/**
 * Página agrupada "Perfiles". El navbar muestra "Perfil de ingreso" y "Perfil de
 * egreso" por separado; ambos llevan aquí (#ingreso / #egreso). Reutiliza el
 * contenido existente de cada perfil.
 *
 * Sin selector de versión de plan: hoy solo hay un plan vigente (2018) con
 * información real. El switch 2018/2027 se retira hasta que exista contenido
 * real del plan 2027; mostrarlo antes solo invita a hacer clic en algo vacío.
 */
export default function Perfiles() {
  return (
    <>
      <AnchoredSection id="ingreso">
        <PerfilIngresante />
      </AnchoredSection>
      <AnchoredSection id="egreso">
        <PerfilEgresado />
      </AnchoredSection>
    </>
  );
}
