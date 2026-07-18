def print_state(state):

    print("\n=============================")
    print("CURRENT AGENT STATE")
    print("=============================\n")

    for key, value in state.items():

        print(f"{key}")

        print("-" * 40)

        print(value)

        print()