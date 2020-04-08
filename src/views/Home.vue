<template>
<div>
    <Menu />
    <h2 align="center" style=" color: rgb(34, 83, 132); padding: 16px;">NOTIFICACIONES</h2>
    <hr>
    <section class="notificaciones">
      <span class="notificaciones--update">
        <img
          id="reload"
          src="../../public/img/icons8-actualizar-480.png"
          alt="Actualizar"
          @click="upload"
        />
      </span>
      <span class="notificaciones--update">
        <img
          id="basura"
          src="../../public/img/icons8-eliminar-480.png"
          alt="Eliminar"
        />
      </span>
    </section>
</div>
</template>

<style scoped>
    .notificaciones--update {
        cursor: pointer;
    }

    #reload {
        margin-left: 2vw;
        width: 32px;
    }

#basura {
  margin-left: 2vw;
  width: 37px;
}

button {
  border-radius: 50%;
  color: white;
  font-weight: bold;
  background-color: brown;
  border-color: brown;
}

#box-notify {
  float: right;
  width: 50%;
  text-align: left;
  list-style: none;
}

.noti {
  padding: 32px;
  margin-top: 12px;
}
</style>

<script>
import Menu from "@/components/Menu";

export default {
    name: 'home',
    components: {
        Menu
    },
    data() {
        return {
            Status: false,
            Progress: false,
            Curses: false,
            Works: false
        }
    },

    methods: {
        StatusChange() {
            this.Status = ! this.Status;
            this.Progress = false;
            this.Curses = false;
            this.Works = false;
        },
        ProgressChange() {
            this.Progress = !this.Progress;
            this.Status = false;
            this.Curses = false;
            this.Works = false;
        },
        WorksChange() {
            this.Works = !this.Works;
            this.Status = false;
            this.Curses = false;
            this.Progress = false;
        },
        CursesChange() {
            this.Curses = !this.Curses;
            this.Status = false;
            this.Progress = false;
            this.Works = false;
        },
        upload() {
            function actualizar() {
                location.reload(true);
            }
            setInterval(actualizar(), 4000);
        }
    }
}
</script>