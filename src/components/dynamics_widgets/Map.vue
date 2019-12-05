<template>
  <section
    class="map-section-container flex row space-around"
    :style="{ width: width + '%' }"
  >
    <div class="map-container">
      <gmap-map :center="newData.data.center" :zoom="12" class="map">
        <gmap-marker
          :key="index"
          v-for="(m, index) in newData.data.markers"
          :position="m.position"
          @click="center = m.position"
        ></gmap-marker>
      </gmap-map>
      <label>
        <gmap-autocomplete @place_changed="setPlace" v-if="isEdit"></gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
    </div>
    <div class="text-section">
      <input type="text" v-model="newData.data.placeName" placeholder="Enter Title" v-if="isEdit"/>
      <h3 v-if="!isEdit">{{newData.data.placeName}}</h3>
      <div v-for="(place, index) in newData.data.placesMarked" :key="index">
        <p @click="centerMap(index)">{{ place }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: Object,
    width: Number
  },
  created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEdit = true;
    else this.isEdit = false;
    console.log(this.data)
    this.cloneData()
  },
  data() {
    return {
      newData:{}
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    centerMap(index){
      this.newData.center = this.newData.data.markers[index].position
      this.$emit('saveMapData', this.newData)

    },
    setPlace(place) {
      this.newData.data.currentPlace = place;
      this.$emit('saveMapData', this.newData)

    },
    addMarker() {
      if (this.newData.data.currentPlace) {
        const marker = {
          lat: this.newData.data.currentPlace.geometry.location.lat(),
          lng: this.newData.data.currentPlace.geometry.location.lng()
        };
        this.newData.data.markers.push({ position: marker });
        this.newData.data.places.push(this.newData.data.currentPlace);
        this.newData.data.placesMarked.push(this.newData.data.currentPlace.name);
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
      this.newData=JSON.parse(JSON.stringify(this.data))
      console.log('new',this.newData)

    }
  }
};
</script>

<style lang="scss" scoped>
.map-section-container {
  position: relative;
}
.map-container {
  padding: 10px;
  width: 50%;
  .map{
  width:100%;  
  height: 300px;
  padding: 10px 0px;
  }
}
</style>
