import { MapComponent } from '@tencentmap/map'

@Builder
export function buildTencentMap(params: ESObject) {
  Stack() {
    MapComponent({
      mapOptions: params.mapOptions,
      onReady: params.onReady
    })
  }.attributeModifier(params.modifier)
}
