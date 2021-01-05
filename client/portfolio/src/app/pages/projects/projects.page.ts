import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpService } from "../../http.service";
import { VideoPlayer, VideoOptions } from "@ionic-native/video-player/ngx";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.page.html",
  styleUrls: ["./projects.page.scss"],
})
export class ProjectsPage implements OnInit {
  user: any;
  options: VideoOptions;

  constructor(
    private router: Router,
    private _http: HttpService,
    private videoPlayer: VideoPlayer
  ) {
    this.options = {
      scalingMode: 0,
      volume: 0.5,
    };
  }

  ngOnInit() {
    this.user = this._http.myname;
  }

  playLocalVideo() {
    // Playing a video.
    this.videoPlayer
      .play("file:///android_asset/www/movie.mp4")
      .then(() => {
        console.log("video completed");
      })
      .catch((err) => {
        alert(err);
      });
  }
  playRemoteVideo() {
    event.stopPropagation();
    // Playing a video.
    this.videoPlayer
      .play(
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      )
      .then(() => {
        console.log("video completed");
      })
      .catch((err) => {
        alert(err);
      });
  }

  closeVideo() {
    this.videoPlayer.close();
  }
}
