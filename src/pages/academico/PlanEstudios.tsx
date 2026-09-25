import { SectionTitle } from '../../components/ui/SectionTitle';
import MallaFlow from '../../components/academico/MallaFlow';

/**
 * Sin selector de versión de plan: hoy solo hay un plan vigente (2018) con
 * información real. El switch 2018/2027 se retira hasta que exista contenido
 * real del plan 2027; mostrarlo antes solo invita a hacer clic en algo vacío.
 */
export default function PlanEstudios() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Plan de **Estudios**"
          center
          subtitle="Explora la malla como un mapa interactivo: cada curso muestra su código, créditos y prerrequisitos. Toca un curso para ver su detalle."
        />

        <div className="mt-10">
          <MallaFlow />
        </div>
      </div>
    </div>
  );
}
