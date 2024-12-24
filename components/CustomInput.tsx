import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Control, useForm } from "react-hook-form";
import { z } from "zod";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { authFormSchema } from "@/lib/utils";

type CustomInput = {
    control: Control <z.infer<typeof authFormSchema>>,
    name: string,
    label: string,
    placeholder: string,
};

export default function CustomInput({ control, name, label, placeholder }: CustomInput) {
    const form = useForm<z.infer<typeof authFormSchema>>({
        resolver: zodResolver(authFormSchema),
        defaultValues: {
            email: "",
        },
    });

    function onSubmit(values: z.infer<typeof authFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className="form-item">
                    <FormLabel className="form-label">{label}</FormLabel>
                    <div className="">
                        <FormControl>
                            <Input
                                placeholder={placeholder}
                                className="input-class"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage className="form-message mt-2" />
                    </div>
                </div>
            )}
        />
    );
}
