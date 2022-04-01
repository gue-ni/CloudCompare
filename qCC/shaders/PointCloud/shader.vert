#version 330 core
layout (location = 0) in vec3 Pos;
layout (location = 1) in vec4 Color;

uniform mat4 mvp;

varying vec4 color;

void main()
{
	gl_Position = mvp * vec4(Pos, 1.0f);
	color = Color;
	gl_PointSize = 10.0f;
}