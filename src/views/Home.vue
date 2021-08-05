<template>
  <div class="home bg-dark">
    <br>
    <div class="card mb-3" style="max-width: 800px;" v-for="student in students">
      <div class="row g-0">
        <div class="col-md-4">
          <img v-bind:src="student.photo" class="img-fluid rounded-start" alt="">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{`${student.first_name} ${student.last_name}`}}</h5>
            <p class="card-text"><b>Bio: </b>{{ student.short_bio }}</p>
              <a
              type="button" 
              class="btn btn-primary btn-sm" 
              style="background-color: #333333;" 
              v-bind:href="`/users/${student.id}`" 
              role="button"> See Resume</a>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created: function () {
    this.getStudents();
  },
  data: function () {
    return {
      students: {},
    };
  },
  methods: {
    getStudents: function () {
      axios.get("http://localhost:3000/students").then((response) => {
        this.students = response.data;
        console.log(this.students);
      });
    },
  },
};
</script>
