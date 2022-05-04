#version 450 core
layout (location = 0) in vec3 Pos;
layout (location = 1) in vec4 Color;

uniform mat4 ModelView;
uniform mat4 Projection;

varying vec4 color;

void main()
{
	gl_Position = ModelView * Projection * vec4(Pos, 1.0f);
	color = Color;
}