---
layout: project
title: Lightcraft
summary: 3D puzzle/platformer with 2-player co-op that learns kids various aspects of light through puzzels.
status: done
images:
 - lightcraft-world.png
 - lightcraft-world2.png
 - lightcraft-puzzle.png
 - lightcraft-puzzle2.png
categories: project
tags: c# xna 3d platformer puzzle coop xbox360
---

## Goals
* Gain experience with [XNA 4](https://en.wikipedia.org/wiki/Microsoft_XNA).
* Multiple puzzles explaining various aspects of light.
* Support for 2-player local co-op (puzzles require 2 players).

## My tasks
* Terrain
  * Build from heightmap.
  * Multiple levels of detail (stitching inbetween levels).
  * Offline PVS generation for fast occulsion testing.
* Rendering/updating objects
  * Indexed rendering for objects such as trees.
  * Occulsion testing using a quad tree and ray tracers.
  * Basic collision detection using a sphere as a first check and more detailed
* Game Editor
  * Modify heightmap
  * Placing objects

## Lessons learned
* Test performance on a all platforms from the beginning. Xbox 360 is quite a different beast compared to a gaming desktop.
* Working with an external party (artists) can be difficult.
* Hierarchical architecture for game objects is a pain to work with as the amount of different objects grow.