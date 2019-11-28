<template>
  <div>
    <GmapMap
      ref="mapRef"
      :center="pos"
      :zoom="13"
      map-type-id="terrain"
      style="width: 400px; height: 200px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        title="Mister Toy"
        @click="center=m.position"
      />
    </GmapMap>
    <div class="btns">
      <button color="orange" dark @click="goTo(markers[1].position)">Hadera</button>
      <button color="orange" dark @click="goTo(markers[0].position)">Tel-Aviv</button>
      <button color="orange" dark @click="goTo(markers[2].position)">Jerusalem</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pos: { lat: 34, lng: 32.4349958 },
      markers: [
        { position: { lat: 32.0853, lng: 34.781769 } },
        { position: { lat: 32.434048, lng: 34.919651 } },
        { position: { lat: 31.768318, lng: 35.213711 } }
      ]
    };
  },
  methods: {
    goTo(pos) {
      this.$refs.mapRef.$mapPromise.then(map => {
        map.panTo(pos);
      });
    }
  },
  mounted() {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)

    this.$refs.mapRef.$mapPromise.then(map => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          //   self.markers.push({ position: pos });
          map.panTo(pos);
        });
      }
    });
  }
};
</script>
<style scoped>
.btns {
  display: flex;
  justify-content: space-around;
  max-width: 300px;
  padding: 10px;
}
</style>