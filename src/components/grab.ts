import { defineComponent, Types } from "bitecs";

export const Grabbable = defineComponent();
export const Grabbed = defineComponent({
  // TODO: Write description
  distance: Types.f32
});
