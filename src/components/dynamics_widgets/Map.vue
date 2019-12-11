<template>
  <section class="map-section-container flex row space-around container">
    <widget-editor
      :data="newData"
      @changePos="changePos"
      @setImg="setImg"
      @removeWidget="removeWidget"
    ></widget-editor>
    <div class="map-container">
      <gmap-map :center="newData.data.center" :zoom="12" class="map">
        <gmap-marker
          :key="index"
          v-for="(m, index) in newData.data.locations"
          :position="m.position"
          @click="center = m.position"
        ></gmap-marker>
      </gmap-map>
    </div>
    <div v-if="isEdit" class="edit-section flex column align-center">
      <label>Your Business Details:</label>
      <gmap-autocomplete
        :value="addressSearch"
        class="addressBar"
        @place_changed="setPlace"
      ></gmap-autocomplete>
      <button class="btn-round" @click="addMarker">Add Location</button>
      <ul>
        <li
          class="addressRef flex justify-center"
          v-for="(location, index) in newData.data.locations"
          :key="index"
          @click="centerMap(index)"
        >
          {{ location.locationName }}
        </li>
      </ul>

      <div class="input-container flex column justify-center align-start">
        <label class="label">Phone:</label>
        <input
          type="text"
          v-model="newData.data.businessInfo.phone"
          class="addressBar"
          placeholder="Phone Number"
        />
      </div>

      <div class="input-container flex column justify-center align-start">
        <label class="label">Email:</label>
        <input
          type="text"
          v-model="newData.data.businessInfo.email"
          class="addressBar"
          placeholder="Email"
        />
      </div>

      <div class="input-container flex column justify-center align-start">
        <label class="label">Working Hours:</label>
        <input
          type="text"
          v-model="newData.data.businessInfo.openOn.week"
          class="addressBar"
          placeholder="Monday-Friday ?"
        />
      </div>

      <div class="input-container flex column justify-center align-start">
        <input
          type="text"
          v-model="newData.data.businessInfo.openOn.sat"
          class="addressBar"
          placeholder="Saturaday ?"
        />
      </div>

      <div class="input-container flex column justify-center align-start">
        <input
          type="text"
          v-model="newData.data.businessInfo.openOn.sun"
          class="addressBar"
          placeholder="Sunday ?"
        />
      </div>
      <button @click="saveInfo">Save</button>
    </div>

    <div v-else class="flex column">
      <h3 class="title flex justify-center">Our Locations</h3>
      <div class="flex row">
        <ul>
          <li
            class="addressRef flex justify-center"
            v-for="(location, index) in section.data.locations"
            :key="index"
            @click="centerMap(index)"
          >
            {{
          section.data.locations[index].address
        }}
          </li>
        </ul>
      </div>

      <span class="">Phone: {{ section.data.businessInfo.phone }}</span>
      <a :href="'mailto' + section.data.businessInfo.email" class=""
        >Email: {{ section.data.businessInfo.email }}</a
      >

      <span class=""
        >Monday-Friday: {{ section.data.businessInfo.openOn.week }}</span
      >
      <span class="">Saturday: {{ section.data.businessInfo.openOn.sat }}</span>
      <span class="">Sunday: {{ section.data.businessInfo.openOn.sun }}</span>
    </div>
  </section>
</template>

<script>
import WidgetEditor from "../wixer_cmps/WidgetEditor";

export default {
  props: {
    section: Object,
    width: Number
  },
  created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEdit = true;
    else this.isEdit = false;
    this.cloneData();
    console.log(this.newData);
  },
  data() {
    return {
      newData: {},
      selectedLocIdx: null,
      businessInfo: {
        openOn: { week: "", sat: "", sun: "" },
        email: "",
        phone: ""
      },
      addressSearch: null
    };
  },
  computed: {
    isSelected() {
      if (this.selectedLocIdx) return true;
      else return false;
    }
  },

  methods: {
    saveInfo() {
      // this.newData.data.businessInfo = this.businessInfo
      this.saveSection();
    },
    changePos(moveBy) {
      this.$store.commit({
        type: "changePos",
        moveBy,
        sectionToMove: this.section
      });
    },
    removeWidget(id) {
      this.$emit("removeSection", id);
    },
    setImg(event) {
      this.$emit("setImg", { event, sectionId: this.section._id });
    },
    centerMap(index) {
      this.selectedLocIdx = index;
      this.newData.data.center = this.newData.data.locations[index].position;
      console.log(this.section.data.locations[index].address);
    },
    setPlace(place) {
      this.newData.data.currentPlace = place;
    },
    addMarker() {
      if (this.newData.data.currentPlace) {
        const position = {
          lat: this.newData.data.currentPlace.geometry.location.lat(),
          lng: this.newData.data.currentPlace.geometry.location.lng()
        };
        const newLocation = {
          position,
          locationName: this.newData.data.currentPlace.address_components[2]
            .long_name,
          address: this.newData.data.currentPlace.formatted_address
        };
        this.newData.data.locations.push(newLocation);
        this.newData.data.center = position;
        this.newData.data.currentPlace = null;
        this.addressSearch = null;
        console.log(this.newData);
      }
    },
    saveSection() {
      this.$emit("save", JSON.parse(JSON.stringify(this.newData)));
    },
    cloneData() {
      this.newData = JSON.parse(JSON.stringify(this.section));
    }
  },
  components: {
    WidgetEditor
  }
};
</script>
