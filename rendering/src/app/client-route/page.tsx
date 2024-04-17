"use client";
import { useTheme } from "@/components/theme-provider";
import React from "react";

export default function ClientRoutePage() {
	const theme = useTheme();

	return (
		<h1
			style={{
				color: theme.colors.primary,
			}}
		>
			Client Page
		</h1>
	);
}
