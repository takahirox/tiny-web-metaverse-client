import {
  defineQuery,
  hasComponent,
  IWorld
} from "bitecs";
import { type Mesh, type MeshBasicMaterial } from "three";
import {
  EntityObject3D,
  EntityObject3DProxy
} from "@tiny-web-metaverse/client/src/components/entity_object3d";
import { Grabbed } from "@tiny-web-metaverse/client/src/components/grab";
import { Raycastable, Raycasted } from "@tiny-web-metaverse/client/src/components/raycast";
import { Selected } from "@tiny-web-metaverse/client/src/components/select";

const query = defineQuery([EntityObject3D, Raycastable]);
const grabbedQuery = defineQuery([Grabbed]);

export const colorSystem = (world: IWorld) => {
  const grabbedExist = grabbedQuery(world).length > 0;

  query(world).forEach(eid => {
    const obj = EntityObject3DProxy.get(eid).root;
    if ((obj as Mesh).material === undefined) {
      return;
    }
    const material = (obj as Mesh).material as MeshBasicMaterial;
    if (hasComponent(world, Grabbed, eid)) {
      material.color.setHex(0x2222aa);
    } else if (hasComponent(world, Selected, eid)) {
      material.color.setHex(0x22aa22);
    } else if (!grabbedExist && hasComponent(world, Raycasted, eid)) {
      material.color.setHex(0xaa2222);
    } else {
      material.color.setHex(0x888888);
    }
  });
};
