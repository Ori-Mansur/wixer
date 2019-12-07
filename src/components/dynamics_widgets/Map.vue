<template>
  <section
    class="map-section-container flex row space-around container">
    <div class="map-container">
      <gmap-map :center="newData.data.center" :zoom="12" class="map">
        <gmap-marker
          :key="index"
          v-for="(m, index) in newData.data.markers"
          :position="m.position"
          @click="center = m.position"
        ></gmap-marker>
      </gmap-map>
    </div>
    <div class="text-section flex column align-center">
      <div class="flex column" v-if="isEdit">
      <label>Enter your location/locations:</label>
        <gmap-autocomplete class="addressBar" @place_changed="setPlace"></gmap-autocomplete>
        <button class="btn-round" @click="addMarker">Add</button>
      </div>
      <h3 class="title flex justify-center">Our Locations</h3>
      <ul>
        <li class="addressRef flex justify-center" v-for="(place, index) in newData.data.placesNames" :key="index" @click="centerMap(index)">{{ place }}</li>
      </ul>
      <span class="fullAddress" v-show="!isSelected">{{newData.data.placesMarked[selectedLocIdx]}}</span>

    </div>
  </section>
</template>

<script>
export default {
  props: {
    section: Object,
    width: Number
  },
  created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEdit = true;
    else this.isEdit = false;
    this.cloneData()
  },
  data() {
    return {
      newData:{},
      selectedLocIdx: null
    };
  },

  mounted() {
    this.geolocate();
  },
  computed:{
    isSelected(){
      if (this.selectedLocIdx===Number) return true
      else return false
    }
  },

  methods: {
    centerMap(index){
      this.selectedLocIdx=index
      this.newData.data.center = this.newData.data.markers[index].position
  
    },
    setPlace(place) {
      this.newData.data.currentPlace = place;
    },
    addMarker() {
      if (this.newData.data.currentPlace) {
        const marker = {
          lat: this.newData.data.currentPlace.geometry.location.lat(),
          lng: this.newData.data.currentPlace.geometry.location.lng()
        };
        this.newData.data.markers.push({ position: marker });
        this.newData.data.places.push(this.newData.data.currentPlace);

        this.newData.data.placesNames.push(this.newData.data.currentPlace.address_components[2].long_name);
        this.newData.data.placesMarked.push(this.newData.data.currentPlace.formatted_address);
        this.newData.data.center = marker;
        this.newData.data.currentPlace = null;
      }
      this.$emit('saveMapData', this.newData)
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.newData.data.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
    cloneData(){
      this.newData=JSON.parse(JSON.stringify(this.section))

    }
  }
};
</script>

<style lang="scss" scope>
</style>
