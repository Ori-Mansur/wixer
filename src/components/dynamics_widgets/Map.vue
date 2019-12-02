<template>
  <section class="map-container" :style="{width: width+'%'}">
    <gmap-map :center="center" :zoom="12" style="width:100%;  height: 300px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
    <label>
      <gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>
      <button @click="addMarker">Add</button>
    </label>
    <div>{{this.placesMarked}}</div>
  </section>
</template>

<script>
export default {
  props: {
    value: Object,
    width: Number
  },
  data() {
    return {
      center: { lat: 32.109333, lng: 34.855499 },
      markers: [],
      places: [],
      placesMarked: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        console.log(this.currentPlace.name);
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.placesMarked.push(this.currentPlace.name);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>


<style scoped>
.map-container {
  position: relative;
}
</style>
