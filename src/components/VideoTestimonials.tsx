
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Play, Video } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const videoTestimonials = [
  {
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    videoId: "UQQHSbeIaQE", // YouTube video ID
    title: "Carlos shares his investment journey",
    author: "Carlos M.",
    location: "Spain",
    duration: "2:14"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    videoId: "pVE92TNDwUk", // YouTube video ID
    title: "Michael on Paraguay's agricultural potential",
    author: "Michael K.",
    location: "Germany",
    duration: "3:45"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    videoId: "hBCbxzogG_8", // YouTube video ID
    title: "How Sophia's farm investment grew",
    author: "Sophia W.",
    location: "United States",
    duration: "4:02"
  }
];

const VideoTestimonials: React.FC = () => {
  return (
    <section id="video-testimonials" className="py-16 md:py-24 bg-forest-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-forest-100 p-3 rounded-full">
              <Video className="h-8 w-8 text-forest-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Video Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear directly from investors about their experiences with Paraguayan farmland
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoTestimonials.map((video, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
                      <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="h-6 w-6 text-forest-600 fill-forest-600" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-gray-800 mb-1">{video.title}</h3>
                    <p className="text-sm text-gray-600">
                      {video.author} from {video.location}
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none">
                <div className="relative pt-[56.25%] w-full">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
