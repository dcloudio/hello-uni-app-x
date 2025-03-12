import { MapComponent } from '@tencentmap/map'

@Builder
export function buildTencentMap(params: ESObject) {
  MapComponent({
    mapOptions: params.mapOptions,
    onReady: params.onReady
  })
}
