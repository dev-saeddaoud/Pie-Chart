<script lang="ts">
  import { v4 as uuidv4 } from 'uuid';
  import { expenses } from '../../stores/expenses';

  let title: string = '';
  let amount: number = 0;
  let type: string;

  let titleError: string = '';
  let amountError: string = '';
  let typeError: string = '';

  let open = false;

  const addEntry = () => {
    let errorFlag = false;

    $expenses.forEach((item) => {
      if (title === '') {
        titleError = 'title must not be empty';
        errorFlag = true;
      } else if (
        item.title.trim().toLowerCase() === title.trim().toLowerCase()
      ) {
        titleError = 'title already exists';
        errorFlag = true;
      } else {
        titleError = '';
      }
    });

    if (type === null) {
      typeError = 'Please select a type';
      errorFlag = true;
    } else {
      typeError = '';
    }

    if (amount === 0) {
      amountError = 'amount must be greater than 0';
      errorFlag = true;
    } else {
      amountError = '';
    }

    if (!errorFlag) {
      let newEntry = { id: uuidv4(), type, title, amount };
      expenses.update((prevValues) => {
        let newValues = [newEntry, ...prevValues];
        return newValues;
      });
      title = '';
      type = null;
      amount = 0;

      open = false;
    }
  };
</script>

<div class="container" class:open>
  <div class="open-form" on:click={() => (open = !open)}>
    {#if open === false}
      <i class="fas fa-angle-double-right" />
    {:else}
      <i class="fas fa-angle-double-left" />
    {/if}
  </div>
  <form class="form" on:submit|preventDefault={addEntry}>
    <h3 class="form__title">Add Income/Expense</h3>
    <div class="form__group">
      <label for="type">Type</label>
      <select bind:value={type} id="type">
        <option value={null} disabled>Select Type</option>
        <option value="inc">Income</option>
        <option value="exp">Expense</option>
      </select>
      <small class="error">{typeError}</small>
    </div>
    <div class="form__group">
      <label for="title">Title</label>
      <input type="text" id="title" placeholder="title" bind:value={title} />
      <small class="error">{titleError}</small>
    </div>
    <div class="form__group">
      <label for="amount">Amount</label>
      <input
        type="number"
        min="0"
        id="amount"
        placeholder="amount"
        bind:value={amount}
      />
      <small class="error">{amountError}</small>
    </div>
    <div class="btn-container">
      <button type="submit" class="btn">Add</button>
    </div>
  </form>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-right: 1px solid black;
    width: 400px;
  }
  .open-form {
    position: fixed;
    left: 0;
    top: 50%;
    display: none;
    font-size: 24px;
    cursor: pointer;
  }
  .form {
    width: 100%;
  }

  .form__title {
    width: 100%;
    display: block;
    font-size: 24px;
    text-align: center;
    letter-spacing: 2px;
  }

  .form__group {
    margin: 20px 0;
    width: 100%;
    height: 70px;
  }

  .form__group select {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    font-size: 18px;
  }

  .form__group select:focus {
    outline: none;
  }

  .form__group label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .form__group input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    font-size: 18px;
  }

  .form__group input:active,
  .form__group input:focus {
    outline: none;
    border: none;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn {
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 18px;
    background-color: var(--bg-color);
    color: var(--text-color);
    border: none;
    cursor: pointer;
  }

  .error {
    color: var(--exp-color);
  }

  @media (max-width: 1200px) {
    .container {
      position: absolute;
      width: 100%;
      left: -100%;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.8);
      transition: all 0.5s ease-in;
    }

    .form {
      width: 90%;
    }

    .open-form {
      display: block;
    }

    .open .open-form {
      color: var(--text-color);
    }

    .open {
      left: 0;
    }
  }
</style>
