#version 330 core
layout (location = 0) in vec3 aPos;

uniform mat4 mv;
uniform mat4 p;

void main()
{
	gl_Position = mv * p * vec4(aPos, 1.0f);
	gl_PointSize = 10.0f;
}