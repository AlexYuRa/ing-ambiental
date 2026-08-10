import React from 'react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import EnConstruccion from '../../components/layout/EnConstruccion';

/**
 * Página "Órganos de Gobierno". Solo el Consejo de Facultad: se retiraron
 * Consejeros y Centro Federado a pedido del programa.
 */
export default function OrganosGobierno() {
  return (
    <AnchoredSection id="consejo-facultad">
      <EnConstruccion
        titulo="Consejo de **Facultad**"
        descripcion="Máximo órgano de gobierno de la facultad: aprueba políticas académicas y administrativas."
      />
    </AnchoredSection>
  );
}
